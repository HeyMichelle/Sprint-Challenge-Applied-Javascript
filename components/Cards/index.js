
const card = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
        .then((res) => {            
                for (const arr of Object.values(res.data.articles)) {
                  for (const item of arr) {
                    card.appendChild(cardCreator(item));
                  }
                }
              })

              .catch((err) => {
                console.log("Error:", err);
            })
            
        //     // Object.keys(articles);
        //     // keys.forEach(key => {
        //     //      card.appendChild(cardCreator(item))
        //     // })

        //     const js = articles.javascript;
        //     const bs = articles.bootstrap;
        //     const jq = articles.jquery;
        //     const node = articles.node;
        //     const tech = articles.technology;
            
        //     i = 0;
           
        //     js.forEach((item) => {
        //         card.appendChild(cardCreator(item))
        //     });
        //     bs.forEach((item) => {
        //         card.appendChild(cardCreator(item))
        //     });
        //     jq.forEach((item) => {
        //         card.appendChild(cardCreator(item))
        //     });
        //     node.forEach((item) => {
        //         card.appendChild(cardCreator(item))
        //     });
        //     tech.forEach((item) => {
        //         card.appendChild(cardCreator(item))
        //     });

        //     // array methods to shorten: ex: instead of articles.javascript, do articles forEach. Can you extract info you need from just "const articles". Object.keys:value. Different ways to access key:value pairs with different methods.  
        
        //     console.log(res);
        // })

      


function cardCreator(article) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

        const headDiv = document.createElement('div');
        headDiv.classList.add('headline');
        headDiv.textContent = article.headline;
        cardDiv.appendChild(headDiv);
        
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);
           
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('img-container');
            authorDiv.appendChild(imgDiv);

                const newImg = document.createElement('img');
                newImg.src = article.authorPhoto;                
                imgDiv.appendChild(newImg);

            const authorsName = document.createElement('span');
            authorsName.textContent = article.authorName;
            authorDiv.appendChild(authorsName);

    return cardDiv;
}