// 
window.addEventListener('DOMContentLoaded', () => {
    const savedNumber = localStorage.getItem('savedNumber');
    if (savedNumber !== null) {
      displayNumber(savedNumber); // 
      document.getElementById('numberInput').value = savedNumber;
    }
  });
  
  // 
  const handleDisplayClick = () => {
    const input = document.getElementById('numberInput').value.trim();
  
    if (validateInput(input)) {
      localStorage.setItem('savedNumber', input); // 
      displayNumber(input); // 
    } else {
      displayError('الرجاء إدخال رقم صحيح من 1 إلى 3 خانات'); // 
    }
  };
  