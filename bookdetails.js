async function fetchBookDetails(){
    const bookId = getIDFroURL(window.location.search);
    const response = await fetch(`https://gutendex.com/books/${bookId}`);
    const details = await response.json();
    console.log(details);
    addDetails(details);
}

function getIDFroURL(search){
    const url = new URLSearchParams(search);
    const id = url.get("id");
    console.log(id);
    return id;
}

function addDetails(book){
    const languageTag = document.getElementById("language");
    const lang = "EN"; // Replace with dynamic language
    languageTag.textContent = lang;
    languageTag.style.backgroundColor = lang === "EN" ? "green" : "blue";

    const bookImg = document.querySelector("#bookImg");
    const img = document.createElement("img");
    img.className = "book-details-img";
    img.src = book.formats["image/jpeg"];
    bookImg.appendChild(img);

    const title = document.querySelector("#title");
    const h2 = document.createElement("h2");
    h2.textContent = book.title;
    title.appendChild(h2);

    const author = document.querySelector("#author");
    const name = document.createElement("h4");
    name.textContent = book.authors[0].name;
    author.appendChild(name);   

    const tags = document.querySelector("#tags");
    const tag_ul = document.createElement("ul");
    tag_ul.id = "taglist";
    book["subjects"].forEach(tag => {
        const bookTag = document.createElement("li");
        bookTag.className = "booktag"
        bookTag.textContent = tag;
        tag_ul.appendChild(bookTag);
        
    });
    tags.appendChild(tag_ul); 

    const summary = document.querySelector("#summary");
    const p = document.createElement("p");
    p.className = "mt-4";
    p.textContent = book.summaries[0];
    summary.appendChild(p);
}