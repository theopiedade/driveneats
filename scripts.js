function select(type,item,check) {
 
  const s = document.querySelector(type+" .selected");
  if (s !== null) { 
    s.classList.remove('selected');
  }
  
  const i = document.querySelector(item);
  if (s !== i) {
    i.classList.toggle('selected');
  }

}

