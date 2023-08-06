// document.addEventListener('DOMContentLoaded', function () {
//     // Get all radio buttons
//     var radioButtons = document.querySelectorAll('input[type="radio"]');

//     // Add click event listener to each radio button
//     radioButtons.forEach(function (radioButton) {
//         radioButton.addEventListener('click', function () {
//             showParagraph(this.value);
//         });
//     });
// });

// function showParagraph(paragraphId) {
//     // Get the targeted paragraph using querySelector
//     var selectedParagraph = document.querySelector(`#${paragraphId}`);
    
//     // Check if the paragraph exists before proceeding
//     if (selectedParagraph) {
//         // Get all the paragraphs
//         var paragraphs = document.querySelectorAll('.paragraphs p');

//         // Remove 'active' class from all paragraphs
//         paragraphs.forEach(function (paragraph) {
//             paragraph.classList.remove('active');
//         });

//         // Add 'active' class to the selected paragraph
//         selectedParagraph.classList.add('active');
//     } else {
//         console.error(`Paragraph with ID "${paragraphId}" not found.`);
//     }
// }
// Add an event listener to show/hide the options list on click
document.querySelector('.select-box').addEventListener('click', function() {
    const optionsList = this.querySelector('.options-list');
    optionsList.style.display = optionsList.style.display === 'none' ? 'block' : 'none';
  });
  
  // Add an event listener to handle option selection
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      const selectedOption = this.textContent;
      document.querySelector('.selected-option').textContent = selectedOption;
      document.querySelector('.options-list').style.display = 'none';
    });
  });
  
