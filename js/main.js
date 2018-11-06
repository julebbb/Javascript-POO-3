var form = document.getElementsByClassName('form');
var main = document.getElementById('main');
var send = form[0][3];

send.addEventListener("click",function() {
  //Create variable with input value
  let title = form[0][0].value;
  let catchphrase = form[0][1].value;
  let descript = form[0][2].value;

  //Create new Product with input
  let cardDone = new Product(title, catchphrase, descript);
  //Create card
  cardDone.createcard();  
});


function Product(title, catchphrase, descript) {
  //Take value in input
  this.title = title,
  this.catchphrase = catchphrase,
  this.descript = descript,

  this.createElement = {
    // Create element
    card: document.createElement("div"),
    titleCard: document.createElement('h2'),
    catchphraseCard: document.createElement('h3'),
    descriptCard: document.createElement('p')
  };
  this.createNode = {
    //Create node with text input
    nodeTitle: document.createTextNode(this.title),
    nodeCatchphrase: document.createTextNode(this.catchphrase),
    nodeDescript: document.createTextNode(this.descript)
  };

  this.createcard = function() {
    //Add class for Css and Bootstrap
    this.createElement.card.className = "product";
    
    this.createElement.card.classList.add('card');
    this.createElement.titleCard.className = "card-header";
    this.createElement.catchphraseCard.className = "card-title";
    this.createElement.descriptCard.className = "card-text";

    //Add child element for element parent div => h2, h3, p
    this.createElement.card.appendChild(this.createElement.titleCard);
    this.createElement.card.appendChild(this.createElement.catchphraseCard);
    this.createElement.card.appendChild(this.createElement.descriptCard);

    //Add text for element
    this.createElement.titleCard.appendChild(this.createNode.nodeTitle);
    this.createElement.catchphraseCard.appendChild(this.createNode.nodeCatchphrase);
    this.createElement.descriptCard.appendChild(this.createNode.nodeDescript);

    //Add all elements in main element
    main.appendChild(this.createElement.card);
    
    //Delete value from input
    form[0][0].value = "";
    form[0][1].value = "";
    form[0][2].value = "";
  };

}
