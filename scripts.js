function select () {
  const s = document.querySelector('.item_box, .selected');
  alert(s.classList);
  
  if (s !== null) { 
    alert('entrou');
    s.classList.remove('selected');
  }
 
}

