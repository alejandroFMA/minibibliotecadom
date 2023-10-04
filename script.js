const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
}]


let tarjeta1 = document.getElementById("libro1");
tarjeta1.style.backgroundColor="pink";
tarjeta1.style.display="flex";
tarjeta1.style.flexDirection="column";
tarjeta1.style.alignItems="center";
let imagen1 = document.createElement("img")
imagen1.src= books[0].imageLink
let titulo1 = document.createElement("h2");
titulo1.style.color="blue";
let autor1 = document.createElement("p");
let country1 = document.createElement("p");
let pages1= document.createElement("p");
let year1 = document.createElement("p");
let link1 = document.createElement("a");
let texto1 = document.createTextNode(books[0].title);
let autor11 = document.createTextNode(books[0].author)
let country11= document.createTextNode(books[0].country)
let pages11= document.createTextNode(books[0].pages + " pages");
let year11 = document.createTextNode(books[0].year);
link1.href= books[0].link
let linkText = document.createTextNode("Más información");
titulo1.appendChild(texto1);
tarjeta1.appendChild(imagen1)
tarjeta1.appendChild(titulo1);
autor1.appendChild(autor11);
tarjeta1.appendChild(autor1);
country1.appendChild(country11);
tarjeta1.appendChild(country1);
pages1.appendChild(pages11);
tarjeta1.appendChild(pages1);
year1.appendChild(year11);
tarjeta1.appendChild(year1);
link1.appendChild(linkText);
tarjeta1.appendChild(link1);


const tarjetaLibros = document.getElementById('container');

let libros = books.map(book => `
    <div class="card">
        <img src="${book.imageLink}" alt="${book.title}">
        <h2>Title: ${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Language: ${book.language}</p>
        <p>Pages: ${book.pages} pages</p>
        <p>Year: ${book.year}</p>
        <a href="${book.link}">Más información</a>
    </div>
    
`);
tarjetaLibros.innerHTML = libros;

