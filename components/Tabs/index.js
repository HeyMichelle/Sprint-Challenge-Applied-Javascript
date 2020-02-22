const topicContent = document.querySelector('.topics')

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
        .then((res) => {
            const newTabs = res.data.topics;
            newTabs.forEach((topic) => {
                topicContent.appendChild(tabCreator(topic))
            })
            // console.log(res);
            // console.log(res.data.topics);
        })
        .catch((err) => {
            console.log("Error:", err);
        });


function tabCreator(tabName) {
    const tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = tabName;
    return tabDiv;
}



// const topicsArray = ['javascript', 'bootstrap', 'technology', 'jquery', 'node.js']

// i = 0;

// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//   .then( response => {
//     console.log(response);
//     const data = response.data.topics;
//     const topicsDiv = document.querySelector('.topics');
//     topicsDiv.appendChild(tabCreator(data));
//   })
//   .catch( err => {
//     console.log("Error: ", err);
//   })

// function tabCreator(data) {
//     const tabDiv = document.createElement('div');
//     tabDiv.classList.add("tab");
//     tabDiv.textContent = `${data}`;

//     return tabDiv;
// }