const mainContent = document.querySelector(".main-content");
const btn = document.querySelector("#btn");
const content = document.querySelector(".content");
const keypress = document.querySelector(".keypress");
const colorResult = document.querySelector(".color-result");
const word = document.querySelector(".word");
const def = document.querySelector(".def");
const btn2 = document.querySelector(".btn2");





btn.addEventListener("click", () => {
  content.style.display = "block";
  btn.textContent="Prends du plaisir!"
  setTimeout(() => {
    btn.style.display="none"
    btn.style.transform.translateX="-120px"
    btn.style.transition="3s ease"
  }, 4000);
});

btn2.addEventListener("click", () => {
  btn2.classList.add("def");
  def.style.display = "block";
  btn2.style.visibility = "hidden";
 
});

document.addEventListener("keypress", (e) => {
  title.style.visibility = "visible";
  colorResult.textContent = e.key;
  if (e.key === "a") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#A52A2A";
    word.style.color="white";
    colorResult.style.backgroundColor = "#A52A2A";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "A" a pour mot :</span>
      <p>"Avion"</p>
      <p>" et pour couleur : Auburn, Argent ou Aubergine."</p>
    `
    def.textContent = "Un avion est un véhicule aérien plus lourd que l'air, muni d'ailes fixes et d'un ou plusieurs moteurs, capable de voler en utilisant la portance générée par ses ailes.";
    ;
  } else if (e.key === "b") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#000080";
    colorResult.style.backgroundColor = "#000080";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "B" a pour mot :</span>
      <p>"Bonjour"</p>
      <p>"et pour couleur : Bleu"</p>
    `;
    def.textContent = "Le mot 'bonjour' est un terme de salutation utilisé en français. Il est couramment employé pour saluer quelqu'un lors d'une rencontre.";
  } 
  else if (e.key === "c") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#fdf1b8";
    word.style.color="black"
    colorResult.style.backgroundColor = "#fdf1b8";
    colorResult.style.color = "black";
    word.innerHTML = `
      <span>La lettre "C" a pour mot :</span>
      <p>"Crème"</p>
      <p>"et pour couleur : Crème"</p>
    `;
    def.textContent = "La crème est une partie spéciale du lait qui est très épaisse et délicieuse. On la met souvent sur des gâteaux ou des fruits.";

  } 
  
  else if (e.key === "d") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#FFD700";
    word.style.color="black"
    colorResult.style.backgroundColor = "#FFD700";
    colorResult.style.color = "black";
    word.innerHTML = `
      <span>La lettre "D" a pour mot :</span>
      <p>"Doré"</p>
      <p>"et pour couleur : Doré"</p>
    `;
    def.textContent = "Le doré est une couleur brillante et jaune, comme le métal précieux appelé or. Imagine la couleur d'une médaille d'or ou le jaune brillant d'un trésor de pirate.";

  } 


  else if (e.key === "e") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#555D50";
    word.style.color="white"
    colorResult.style.backgroundColor = "#555D50";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "E" a pour mot :</span>
      <p>"Ébène"</p>
      <p>"et pour couleur : Ébène"</p>
    `;
    def.textContent = "Ébène est un mot qui décrit une couleur très foncée, comme le noir profond. C'est aussi le nom d'un type de bois très dur et sombre qui est souvent utilisé pour fabriquer de beaux meubles.";

  } 
  

  //-----------f-----------------------

  else if (e.key === "f") {
    word.style.visibility = "visible";
    word.style.backgroundColor = "#c72c48";
    word.style.color="white"
    colorResult.style.backgroundColor = "#c72c48";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "F" a pour mot :</span>
      <p>"Fleur"</p>
      <p>"et pour couleur : Framboise"</p>
    `;
    def.textContent = "Une fleur est la partie colorée d'une plante. Elle pousse souvent sur une tige et a des pétales colorés. Les fleurs sont belles à regarder et sentent bon.";

  } 

  //--------------g------------



  else if (e.key === "g") {
    word.style.visibility = "visible";
    word.style.backgroundColor = " #808080";
    word.style.color="white"
    colorResult.style.backgroundColor = " #808080";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "G" a pour mot :</span>
      <p>"Gris"</p>
      <p>"et pour couleur : Gris"</p>
    `;
    def.textContent = "Le gris est une couleur qui se trouve entre le noir et le blanc. C'est comme la couleur des nuages quand il va pleuvoir ou la couleur de certains animaux comme les éléphants et les souris.";

  } 


  //----------------h-------------------------------


  else if (e.key === "h") {
    word.style.visibility = "visible";
    word.style.backgroundColor = " #6C4F3D";
    word.style.color="white"
    colorResult.style.backgroundColor = " #6C4F3D";
    colorResult.style.color = "white";
    word.innerHTML = `
      <span>La lettre "H" a pour mot :</span>
      <p>"Hélicoptère"</p>
      <p>"et pour couleur : Harmonie"</p>
    `;
    def.textContent = "Un hélicoptère est un incroyable engin volant qui ressemble à un gros jouet. Imagine un gros jouet avec des rotors qui tournent au-dessus.";

  } 

  
  else {
    colorResult.textContent = "tu as appuyé sur la mauvaise touche.";
    // colorResult.innerHTML="<img src='/assets/non.gif' />";
    colorResult.style.backgroundColor = "red";
    
  }
});
