let h1 =React.createElement("h1",{id:"hero"},"hello from h1")
let h2 =React.createElement("h1",{className:"heroine"},"hello from h2")

let div= React.createElement("div",{id:"parent"},[h1,h2])

let root = ReactDOM.createRoot(document.querySelector(".container"))
root.render(div)