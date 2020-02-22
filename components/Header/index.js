// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const hDiv = document.createElement('div');
    hDiv.classList.add("header");

    const hDate = document.createElement('span');
    hDate.classList.add("date");
    hDate.textContent = "February 21, 2020";
    hDiv.appendChild(hDate);

    const hH1 = document.createElement('h1');
    hH1.textContent = "Lambda Times";
    hDiv.appendChild(hH1);

    const hTemp = document.createElement('span');
    hTemp.classList.add("temp");
    hTemp.textContent = "98°";
    hDiv.appendChild(hTemp);

    return hDiv;
}

const container = document.querySelector('.header-container');
container.appendChild(Header());