import json from './menu.json5';


function createMenuMain() {
   
    const main = document.querySelector("main");
    const h1 = document.createElement("h1");
    const itemsCont = document.createElement("div");

    main.classList.add("menu");
    h1.classList.add("title");
    itemsCont.classList.add("container")

    h1.textContent = "Menu"

    main.appendChild(h1);
    main.appendChild(itemsCont)

    console.log("hello")
    return main
}

function displayMenu() {
    console.log(json.menu.item)
}

function createPage() {
    const homeMain = document.querySelector("main")
    homeMain.textContent = "";
    createMenuMain()
    console.log(json.menu[0].item)
    console.log("createPage")
}

export default createPage;