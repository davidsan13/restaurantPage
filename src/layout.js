
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const name = document.createElement("h1");
    name.classList.add("name");
    name.textContent = "Puzzle";

    header.appendChild(name);
    header.appendChild(createNav());
    
    return header;
}

function createNav() {
    const nav = document.createElement("nav");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav


}
function createMain() {
    const main = document.createElement("main")
}

function createFooter() {

}

export default createHeader;
