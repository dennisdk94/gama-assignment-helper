// Faremos as requisações em uma API externa, cujo endpoint já está listado abaixo.
const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
// const API_URL = "https://api.sheety.co/35ba876740eecd0e1f27e8ffd2ae5a3a/gamaBnb/data";
const API_URL = "https://dry-cliffs-94979.herokuapp.com/"
;
// Para isso, usaremos o "fetch", conforme você deve ter visto nas aulas online.
// Corrija a linha abaixo, para que a requisição funcione.
fetch(API_URL)
  .then(response => response.text())
  .then(result => {
    // Aqui, estamos pegando o resultado da requisição e parseando em JSON, 
    // para que fique mais fácil e amigável, tratarmos esses dados.
    const data  = JSON.parse(result);

   data.map(element => {
      const {name, photo, property_type, price} = element;
      console.log(name, photo, property_type, price);

      var row = document.getElementById("row");

      var div = document.createElement("div");
      div.classList.add("col-md-4");

      var card = document.createElement("div");
      card.classList.className = "card mb-4 box-shadow";

      var imagem = document.createElement("img");
      imagem.classList.add("card-img-top");
      imagem.src = photo;

      var cardBody = document.createElement("div");
      cardBody.className = "card-body";

      var cardText = document.createElement("div");
      cardText.className = "card-text";

      var propertyType = document.createElement("p");
      propertyType.className ="property-type";
      propertyType.innerHTML = property_type;

      var propertyName = document.createElement("p");
      propertyName.className ="property-name";
      propertyName.innerHTML = name;

      var propertyPrice = document.createElement("p");
      propertyPrice.className ="property-price";
      propertyPrice.innerHTML = `Total de ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;


      row.appendChild(div);

      div.appendChild(card); div.appendChild(card);

      card.appendChild(imagem);

      card.appendChild(cardBody);

      cardBody.appendChild(cardText);

      cardText.appendChild(propertyName);

      cardText.appendChild(propertyType);

      cardText.appendChild(propertyPrice);


   })
  });