import createHeader from './layout.js'



function component() {
    const content = document.getElementById("content");
    // const header = createHeader()
    content.appendChild(createHeader());
    console.log('Hello')
    return content;
}

component();



// function initializeWebsite() {
//     const content = document.getElementById("content");
  
//     content.appendChild(createHeader());
//     return content;
    
// }

// initializeWebsite();