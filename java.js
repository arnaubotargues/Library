const myLibrary = [];

function Book(name,author, date){
    this.name= name;
    this.id= crypto.randomUUID();
    this.author = author;
    this.date = date;
    
}




function addBookToLibrary(name,author, date){
const book1 = new Book(name,author,date);
myLibrary.push(book1);
}
addBookToLibrary("The last Kingdom", "Barret", 2011);
addBookToLibrary("El señor de los anillos","Tolkien",1954);


function selectBook(library){
    let i ;
    const container = document.querySelector(".container");

    for (i = 0; i< library.length;i++){
        let llibre= library[i];
        let llibres = document.createElement("div");

        llibres.innerHTML=`
        <h3> ${llibre.name}</h3>
        <p> Author: ${llibre.author}</p>
        <p> Date: ${llibre.date}</p>`
        container.appendChild(llibres)     
    }         
}

let button = document.querySelector(".llibrenou");

button.addEventListener("click", () => {

    let name = prompt("Introdueix el nom del llibre");
    let author = prompt("Introdueix el nom de l'autor");
    let date = prompt("Introdueix la data de creació");
    let newBook = new Book (name,author,date);
    myLibrary.push(newBook);
    selectBook(myLibrary)
})





