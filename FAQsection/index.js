/*
Implement the following functionalities:
when the question is clicked and the answer is visible, 
the plus icon should change to a minus icon
*/


document.addEventListener('DOMContentLoaded', function() {
  
  const detailsElements = document.querySelectorAll('details');
  
  detailsElements.forEach(details => {
      details.addEventListener('toggle', function() {
          const plusIcon = this.querySelector('.plus-icon');
          const verticalLine = this.querySelector('.vertical-line');
          if (this.open) {
              verticalLine.style.display = 'none';
          } else {
              verticalLine.style.display = 'block';
          }
      });
  });
});

