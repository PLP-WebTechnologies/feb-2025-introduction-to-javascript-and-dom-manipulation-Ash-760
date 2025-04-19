// 1. Change text content dynamically
document.getElementById('change-text').addEventListener('click', () => {
    const title = document.getElementById('main-title');
    title.textContent = 'You clicked the button!';
  });
  
  // 2. Modify CSS styles via JavaScript
  document.getElementById('toggle-style').addEventListener('click', () => {
    const description = document.getElementById('description');
    description.classList.toggle('highlight');
  });
  
  // 3. Add or remove an element dynamically
  document.getElementById('add-element').addEventListener('click', () => {
    const dynamicArea = document.getElementById('dynamic-area');
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a statement!';
    newPara.className = 'dynamic';
    dynamicArea.appendChild(newPara);
  });
  
  document.getElementById('remove-element').addEventListener('click', () => {
    const dynamicArea = document.getElementById('dynamic-area');
    const lastElement = dynamicArea.querySelector('.dynamic:last-child');
    if (lastElement) {
      dynamicArea.removeChild(lastElement);
    }
  });
  
