let changeColor = document.querySelectorAll('article') // selectar alla articles
let artColor = ['brown', 'navy', 'pink',] // skapar en array med olika färger
for (let i = 0; i < changeColor.length; i++) { // loopar igenom artiklarna och ger sedan färger till artiklarna
    changeColor[i].style.backgroundColor = artColor[i];
}

let h3Element = document.querySelector('h3'); // selectar h3
h3Element.innerText = 'FRONTEND'; // ändrar text.

let navElement = document.querySelector('#header-navigation'); // selectar header navigation
let navElementChildren = navElement.children; // väljer ut childs
navElementChildren[0].innerText = 'Start'; // ändrar text.

navElementChildren = navElement.children; // selectar child
navElementChildren[2].innerText = 'Mail Us'; // ändrar text på second child

let articleP = document.querySelector('.art-2'); // selectar klasssen art-2
let articlePElement = articleP.children; // appendar 
articlePElement[3].innerText = 'Info om detta plagg balbal. Detta är en ny information om denna produkt. Läs gärna inom.' // ändrar text

let figure = document.querySelector('.art-2 figure'); // ändrar color på min art-2.
figure.style.backgroundColor = 'blue';

let imgChange = document.querySelector('.art-2 img'); // selectar art-2 img och byter ut bild.
imgChange.src = "img/hoodie-forrest.png";

let articles = document.querySelectorAll('section article'); // selectar min article för att ändra adress nedan
let articleElements = articles[1].children;
articleElements[1].innerHTML = 'Norgevägen <br> 25222 Helsingborg <br> Sverige'

let mainP = document.querySelectorAll('p'); // selectar mina p element och ändrar färg till rött nedan
for (let i = 0; i < mainP.length; i++) {
    mainP[i].style.color = 'red';
}

let main = document.querySelector('main'); // selectar main.
let newMenu = document.createElement('article'); // creatar en article
main.appendChild(newMenu); // appendar min nya article till main
newMenu.classList.add('art-4'); // lägger till class art-4 
newMenu.style.backgroundColor = 'orange' // ger den en bakgrundsfärg orange.

let newMenuFig = document.createElement('figure'); // creatar element figure 
newMenu.appendChild(newMenuFig); // appendar till min article 

let newMenuImg = document.createElement('img'); // skapar ett element img.
newMenuImg.src = 'https://source.unsplash.com/weekly?fire'; // random bild.
newMenuFig.appendChild(newMenuImg) // appending. 

let newMenuH2 = document.createElement('h2'); // skapar element h2
newMenu.appendChild(newMenuH2); // appendar till art-4
newMenuH2.innerText = 'Sinus Hoodie'; // skapar text
newMenuH2.style.color = 'white'; // byter färg 

let newMenuH3 = document.createElement('h3'); // skapar en h3 
newMenu.appendChild(newMenuH3); // appendar det till newMenu som är art-4
newMenuH3.innerText = 'Sinus Hoodie'; // byter text
newMenuH3.style.color = 'yellow'; // byter färg

let newMenuP = document.createElement('p') // skapar ett element P 
newMenu.appendChild(newMenuP); // appendar in det till art-4
newMenuP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores'; // skapar en text för P.
newMenuP.style.color = 'green' // ger färgen grönt

let button2 = document.createElement('button'); // här skapar jag en button till art-4 
newMenu.appendChild(button2) // appendar in det till art-4
button2.innerText = 'RESET ALL'; // ändrar text till reset all som kommer reseta allt
button2.style.backgroundColor = 'red'; // byter färg till röd på button

let changeArt = document.querySelectorAll('main article'); // selectar mer specifikt mina articlar i main. 
let changeBtn = document.querySelectorAll('main article button'); // selectar ännu mer specifikt mina buttons i main article.

let elementsArr = ['green', 'brown', 'blue', 'pink']; // skapar en array med olika färger

for (let i = 0; i < changeArt.length; i++) { //loopar igenom och skapar en eventlyssnare för att ändra bakgrundsfärg.
    changeBtn[i].addEventListener('click', function(e){
        changeArt[i].style.backgroundColor = `${elementsArr[i]}`;
    })   
} 

let allBtn = document.querySelectorAll('main article button') // selectar mina buttons i main article. Skapar sedan en array för att loopa igenom den och ge mina buttons olika text. Smidigare att loopa igenom än att skriva och döpa varje button separat. 
let arrBtn = ['first', 'second', 'third', 'fourth'];
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].innerText = `Press ${arrBtn[i]}` 
}

//creatar en div och selectar sedan headern för att appenda min div till headern. Jag använder insert before för att få diven på position 1 i ordningen då jag vill ha mina buttons i mitten. 
let btnContainer = document.createElement('div');
let header = document.querySelector('header');
header.insertBefore(btnContainer, header.children[1]);
btnContainer.classList.add('btn-container') // skapar class btn-container

let removeBtn = document.createElement('button'); // creatar element button som appendas till min div btnContainer som skapas ovanför på rad 88. 
removeBtn.classList.add('remove-page') // skapar class.
removeBtn.textContent = 'Remove all'; 
btnContainer.appendChild(removeBtn); // appendar

removeBtn.addEventListener('click', function(e){ // skapar en eventlyssnare som lyssnar på click. 
    document.body.innerHTML = '';
    document.body.appendChild(removeBtn);
    removeBtn.innerText = 'Go back';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignitems = 'center';
    removeBtn.style.fontSize = '100px';
    removeBtn.addEventListener('click', function(e){
        window.location.reload() // reloadar sidan när man klickat på remove all och hamnar på en blanksida där go back knappen visas. 
    })
})

let resetAll = document.createElement('button'); // creatar en button som kopplas till min div btnContainer som skapas på rad 88.
resetAll.textContent = 'Reset all';
resetAll.classList.add('reset-all') // skapar class. 
btnContainer.appendChild(resetAll);

resetAll.addEventListener('click', function(e) { // skapar en eventlyssnare som även den lyssnar på click. Inne i denna eventlyssnare kopplar jag alla ändringar som görs på sidan. Denna eventlyssnare lyssnar på click som resetar hela sidan och tar bort all styling och ändring som gjorts. 
    let art = document.querySelectorAll('main article');
    art.forEach(element => element.style.backgroundColor = 'white');

    h3Element.innerText = 'Ash'; 

    navElementChildren[0].innerText = 'Home';

    navElementChildren[2].innerText = 'Contact';

    articlePElement[3].innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?';

    articlePElement[4].style.backgroundColor = 'black';
    
    figure.style.backgroundColor = 'rgb(244, 182, 10)';

    articleElements[1].innerHTML = '<p>Sinus skateboards <br>Railsvägen 13 <br>133 37, Rampnäs</p>';

    mainP.forEach(element => element.style.color = 'black');

    main.removeChild(newMenu);

    allBtn.forEach(btn => {
        btn.innerText = 'buy';
    });

    btnContainer.removeChild(resetAll);

    btnContainer.removeChild(removeBtn);

    document.body.removeChild(newUl);
});

// lägger till en ul med flera Li element och appendar detta till bodyn för att sedan ge en border till alla li genom en for loop.  
let newUl = document.createElement('ul');
document.body.appendChild(newUl);
let borderArr = ['1px solid black', '1px solid green', '1px solid red', '1px solid orange'];
for (let i = 0; i < borderArr.length; i++) {
    let newLi = document.createElement('li');
    newLi.style.border = borderArr[i];
    newUl.appendChild(newLi);
}