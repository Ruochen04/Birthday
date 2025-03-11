document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");
  
    // Define the correct groups (each group is an array of numbers)
    const correctGroups = [
      [1, 3, 11, 14],  // Group 1
      [2, 5, 9, 12],   // Group 2
      [4, 7, 10, 16],  // Group 3
      [6, 8, 13, 15]   // Group 4
    ];
  
    // Unique messages for each group
    const groupMessages = [
      "This group was: Places we should go together",
      "This group was: People that you love A LOT like A LOT A LOT :)",
      "This group was: Anagrams for places we have been on dates",
      "This group was: Parts of a word I would use to describe you: CARING, PRETTY, FUNNY, LOVABLE"
    ];
  
    // CSS classes for each group's solved state
    const solvedClasses = [
      "solved-group1",
      "solved-group2",
      "solved-group3",
      "solved-group4"
    ];
  
    // Helper function to compare two arrays (assumes sorted arrays)
    function arraysEqual(a, b) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
  
    // Check if the selected indices form one of the correct groups.
    // Returns the group index (0-3) if found, otherwise -1.
    function checkSelection(selectedIndices) {
      const sortedSelection = selectedIndices.slice().sort((a, b) => a - b);
      for (let i = 0; i < correctGroups.length; i++) {
        const sortedGroup = correctGroups[i].slice().sort((a, b) => a - b);
        if (arraysEqual(sortedSelection, sortedGroup)) {
          return i;
        }
      }
      return -1;
    }
  
    // Add click event listeners to each grid item
    gridItems.forEach(item => {
      item.addEventListener("click", function() {
        // Ignore clicks on already solved items
        if (
          item.classList.contains("solved-group1") ||
          item.classList.contains("solved-group2") ||
          item.classList.contains("solved-group3") ||
          item.classList.contains("solved-group4")
        ) {
          return;
        }
        
        // Toggle selected state
        item.classList.toggle("selected");
  
        // Get all currently selected (but not yet solved) items
        const selectedItems = Array.from(document.querySelectorAll(".grid-item.selected"));
  
        // If exactly 4 items are selected, check if they form a correct group
        if (selectedItems.length === 4) {
          const selectedIndices = selectedItems.map(el => Number(el.dataset.index));
          const groupIndex = checkSelection(selectedIndices);
          if (groupIndex !== -1) {
            // Correct group found: mark each selected item as solved with the group-specific class
            selectedItems.forEach(el => {
              el.classList.remove("selected");
              el.classList.add(solvedClasses[groupIndex]);
            });
            alert(groupMessages[groupIndex]);
          } else {
            // Incorrect group: flash the selected items red, then unselect them
            selectedItems.forEach(el => {
              el.style.backgroundColor = "red";
            });
            setTimeout(() => {
              selectedItems.forEach(el => {
                el.style.backgroundColor = "";
                el.classList.remove("selected");
              });
            }, 500);
          }
        }
  
        // Check if all grid items are solved
        const solvedItems = document.querySelectorAll(".grid-item.solved-group1, .grid-item.solved-group2, .grid-item.solved-group3, .grid-item.solved-group4");
        if (solvedItems.length === gridItems.length) {
          // All items solved: reveal the Next button
          const nextButton = document.getElementById("next-button");
          nextButton.style.display = "block";
        }
      });
    });
  
    // Next Button: when clicked, fade out the yes page then redirect to letter.html
    const nextButton = document.getElementById("next-button");
    if (nextButton) {
      nextButton.addEventListener("click", function() {
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = "letter.html";
        }, 500);
      });
    }
  });
  