function select(type,item,check) {
 
  const s1 = document.querySelector(type+" .selected");
  if (s1 !== null) { 
    s1.classList.remove('selected');
  }
  
  const s2 = document.querySelector(item);
  if (s2 !== s1) {
    s2.classList.toggle('selected');
  }
  
  const c1 = document.querySelector(type+" .checked");
  if (c1 !== null) { 
    c1.classList.remove('checked');
  }
  
  const c2 = document.querySelector(check);
  if (c2 !== c1) {
    c2.classList.toggle('checked');
  }

}

