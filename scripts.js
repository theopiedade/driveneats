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

  const p1 = document.querySelector(".food .selected");
  const p2 = document.querySelector(".drink .selected");
  const p3 = document.querySelector(".deserve .selected");

  const bs = document.querySelector(".button_unchecked");

  if (p1 !== null && p2 !== null && p3 !== null) {
    bs.classList.add('button_checked');
    bs.innerHTML = 'Fechar pedido';
  }
  else if (document.querySelector(".button_checked") !== null) {
    bs.classList.remove('button_checked');
    bs.innerHTML = 'Selecione os 3 itens <br> para fechar o produto';
  }

}

