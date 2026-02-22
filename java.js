const myLibrary = [];

function Book(name,author, date){
    this.name= name;
    this.id= crypto.randomUUID();
    this.author = author;
    this.date = date;
    this.read= this.read;
    
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

}




function addBookToLibrary(name,author, date){
const book1 = new Book(name,author,date);
myLibrary.push(book1);
}

selectBook(myLibrary)

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

const container = document.querySelector(".container")
const llibreNou = document.querySelector(".llibrenou")
llibreNou.addEventListener("click",() => {
    
    let nom = prompt("introudeix nom del llibre")
    let author =prompt("introudeix nom de lautor")
    let date = prompt("introudeix la data de creacio")
    addBookToLibrary(nom,author,date);
    let newBook = myLibrary[myLibrary.length-1]
    let llibreActual = document.createElement("div")
    llibreActual.innerHTML = `
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Autor:</strong> ${author}</p>
        <p><strong>Data:</strong> ${date}</p>
    `;
    container.appendChild(llibreActual)

    let readStatus = document.createElement("button")
    readStatus.innerText= "No llegit"
    llibreActual.appendChild(readStatus)

    readStatus.addEventListener("click",() =>{
        newBook.toggleRead();
        if(newBook.read == true){
            readStatus.innerText="LLegit"
            readStatus.style.backgroundColor="green"
        }else{
        readStatus.innerText="No llegit"
        readStatus.style.backgroundColor=""
        }
        
    })
    const removeButton = document.createElement("button")
    removeButton.innerText="Remove"
    removeButton.style.backgroundColor="red"
    llibreActual.appendChild(removeButton)

    removeButton.addEventListener("click",() =>{
        llibreActual.innerHTML="";
        
    })
})











