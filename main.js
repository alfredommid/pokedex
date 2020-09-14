var pokeContenedor = document.getElementById("pokecaja");

function showCards(pokearray){
    var pokeContenedor = document.getElementById("pokecaja");
    var card = document.createElement("div");
    card.className = "card border-info m-1 text-center col-2 backgroundcard";
    var cardBody = document.createElement("div");
    cardBody.className = "row card-body justify-content-between principal d-flex";
    var color = document.createElement("span");
    color.className = "color";
    var colorsecond = document.createElement("span");
    colorsecond.className = "color second";
    var img = document.createElement("img");
    img.className = "card-img-top imgindex";
    img.src = pokearray.art_url;
    var cuadro = document.createElement("div");
    cuadro.className = "cuadro text-center";
    // -----------Inner cuadro-----------
    var name = document.createElement("p");
    name.className = "text-center name";
    name.innerHTML = pokearray.name;
    // -----------Footer-----------
    var footer = document.createElement("div");
    footer.className = "card-footer d-flex justify-content-between bg-transparent border-success";
    var dexId = document.createElement("span");
    dexId.innerHTML = pokearray.pkdx_id;
    var type = document.createElement("span");
    type.innerHTML = pokearray.types;
      // -----------Inicia Background Color-----------
    if (pokearray.types.length > 1) {
        colorsecond.style.backgroundColor = `var(--${pokearray.types[1]})`;
      } else{
        colorsecond.style.backgroundColor = `var(--${pokearray.types[0]})`;
      }
      color.style.backgroundColor = `var(--${pokearray.types[0]})`;

      // --------Inicia Modal--------
      var modalP = $("#pokeModal");
      modalP.modal({ show: false });

      function triggerModal (event){
        modalP.modal("toggle");
        // -----Inicia Modal Nombre-----
        var modTitle = document.getElementById("pokeModalTitle");
        modTitle.className = "modal-title text-center";
        modTitle.innerHTML = pokearray.name;
        // -----Inicia Modal Img-----
        var imagenModal = document.getElementById("pokeModalImg");
        imagenModal.className = "big-image"
        imagenModal.src = event.target.src;
        // -----Inicia Modal Descripción-----
        var descModal = document.getElementById("pokeModalDesc");
        descModal.className = "modal-description";
        descModal.innerHTML = pokearray.description;
      }
//----------appendChild--------------
pokeContenedor.appendChild(card);
// card.appendChild(header);
card.appendChild(cardBody);
card.appendChild(footer);
cardBody.appendChild(color)
cardBody.appendChild(colorsecond)
cardBody.appendChild(img);
cardBody.appendChild(cuadro);
cuadro.appendChild(name);
footer.appendChild(dexId);
footer.appendChild(type);
// -----------Modal Act-----------
img.onclick = triggerModal;
}

for (var i = 0; i < pokemon.length; i++) 
{showCards(pokemon[i]); }
