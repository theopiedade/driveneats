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

function send_select() {
  const p1 = document.querySelector(".food .selected");
  const p2 = document.querySelector(".drink .selected");
  const p3 = document.querySelector(".deserve .selected");

  if (p1 !== null && p2 !== null && p3 !== null) {
      
    var food = document.querySelector(".food .selected h1");
    var food_select = food.textContent;
    var food = document.querySelector(".food .selected h3");
    var food_price = food.textContent;

    var drink = document.querySelector(".drink .selected h1");
    var drink_select = drink.textContent;
    var drink = document.querySelector(".drink .selected h3");
    var drink_price = drink.textContent;

    var deserve = document.querySelector(".deserve .selected h1");
    var deserve_select = deserve.textContent;
    var deserve = document.querySelector(".deserve .selected h3");
    var deserve_price = deserve.textContent;
  
    var food_price_treat = food_price.replace(",",".");
    food_price_treat = food_price_treat.slice(3,food_price_treat.length);

    var drink_price_treat = drink_price.replace(",",".");
    drink_price_treat = drink_price_treat.slice(3,drink_price_treat.length);

    var deserve_price_treat = deserve_price.replace(",",".");
    deserve_price_treat = deserve_price_treat.slice(3,deserve_price_treat.length);
    
    const total_price = parseFloat(food_price_treat) + parseFloat(drink_price_treat) + parseFloat(deserve_price_treat);
    var total_price_complete = total_price.toFixed(2);
        
    let urlmsg = "https://wa.me/5582991525400?text=" + encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${food_select}\n- Bebida: ${drink_select}\n- Sobremesa : ${deserve_select}\nTotal: ${total_price_complete}`);
    window.open(urlmsg);
    
  }
  else {
    alert("Primeiro selecione os 3 itens");
  }

}
