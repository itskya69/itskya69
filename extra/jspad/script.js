let page = document.getElementById("notepadNumber").value;
const textArea = document.getElementById("content");
let content = document.getElementById("textArea").value;
let notebook = [];
function reload () {
    page = Number(document.getElementById("notepadNumber").value);
    textArea.innerHTML = "";
    textArea.innerHTML = '<input type="textarea" placeholder="your text..." id="textArea" onchange="updateTextarea()" value="'+ notebook[page] +'">';
}
function updateTextarea () {
    page = Number(document.getElementById("notepadNumber").value);
    let content = document.getElementById("textArea").value;
    notebook[page] = content;
}