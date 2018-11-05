var form = document.getElementsByClassName('form');
var main = document.getElementById('main');
var send = form[0][3];

send.addEventListener("click",function() {
  let title = form[0][0].value;
  let catchphrase = form[0][1].value;
  let descript = form[0][2].value;

  let cardDone = new Product(title, catchphrase, descript);
  cardDone.createcard();  
});


function Product(title, catchphrase, descript) {
  this.title = title,
  this.catchphrase = catchphrase,
  this.descript = descript,

  this.createElement = {
    card: document.createElement("div"),
    titleCard: document.createElement('h2'),
    catchphraseCard: document.createElement('h3'),
    descriptCard: document.createElement('p')
  };
  this.createNode = {
    nodeTitle: document.createTextNode(this.title),
    nodeCatchphrase: document.createTextNode(this.catchphrase),
    nodeDescript: document.createTextNode(this.descript)
  };

  this.createcard = function() {
    this.createElement.card.className = "product";

    this.createElement.card.appendChild(this.createElement.titleCard);
    this.createElement.card.appendChild(this.createElement.catchphraseCard);
    this.createElement.card.appendChild(this.createElement.descriptCard);
    this.createElement.titleCard.appendChild(this.createNode.nodeTitle);
    this.createElement.catchphraseCard.appendChild(this.createNode.nodeCatchphrase);
    this.createElement.descriptCard.appendChild(this.createNode.nodeDescript);

    main.appendChild(this.createElement.card);
    
    form[0][0].value = "";
    form[0][1].value = "";
    form[0][2].value = "";
  };

}
