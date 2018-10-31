var form = document.getElementsByClassName('form');
var main = document.getElementById('main');
var send = form[0][3];

send.addEventListener("click",function() {
  var title = form[0][0].value;
  var catchphrase = form[0][1].value;
  var descript = form[0][2].value;

  newProduct = new Product(title, catchphrase, descript);
  cardDone = new Form(newProduct);
  
  cardDone.createcard();

  form[0][0].value = "";
  form[0][1].value = "";
  form[0][2].value = "";
});


function Product(title, catchphrase, descript) {
  this.title = title;
  this.catchphrase = catchphrase;
  this.descript = descript;
}

function Form(newProduct) {
  this.createcard = function() {
    var card = document.createElement("div");
    var titleCard = document.createElement('h2');
    var catchphraseCard = document.createElement('h3');
    var descriptCard = document.createElement('p');

    var nodeTitle = document.createTextNode(newProduct.title);
    var nodeCatchphrase = document.createTextNode(newProduct.catchphrase);
    var nodeDescript = document.createTextNode(newProduct.descript);

    card.className = "product";

    card.appendChild(titleCard);
    card.appendChild(catchphraseCard);
    card.appendChild(descriptCard);
    titleCard.appendChild(nodeTitle);
    catchphraseCard.appendChild(nodeCatchphrase);
    descriptCard.appendChild(nodeDescript);

    main.appendChild(card);
  };

}
