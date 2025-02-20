async function fetchdata() {
    try {
        const response = await fetch("https://gutendex.com/books/");
        const data = await response.json();
        const newdata = data.results.slice(0, 50); // Extract the first 10 books
        console.log(newdata);
        addHeader(newdata);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

function addHeader(data){
    const bookContainer = document.querySelector("#book");
    const row = document.createElement("div");
    row.className = "row row-gap-4 booklist ";
    data.forEach(book => {
        
        const col = document.createElement("div");
        col.className ="col-12 col-sm-6 col-md-4 col-lg-2 bookitem";
        const a_tag = document.createElement("a");
        a_tag.className = "text-decoration-none";
        a_tag.href = `/book-details.html?id=${book.id}`; 

        const card = document.createElement("div");
        card.className = "card bookCover h-100";
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = book.formats["image/jpeg"];
        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h6");
        title.className = "text2row mt-2";
        title.textContent = book.title;

        cardBody.appendChild(title);
        card.appendChild(cardBody);
        a_tag.appendChild(card);
        col.appendChild(a_tag);
        row.appendChild(col);
        bookContainer.appendChild(row);
    });
}

 



fetchdata();
