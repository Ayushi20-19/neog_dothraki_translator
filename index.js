var inputText = document.querySelector(".input-Text")
var btnTranslate = document.querySelector(".btn-translate")
var outputText = document.querySelector(".output-Text")
// var dothraki = document.querySelector(".D-category")
// var hodor = document.querySelector(".H-category")
var url="https://api.funtranslations.com/translate/dothraki.json"

const getUrl = (text)=>{
    return url + "?" + "text=" + text;
}

const clickEventHandler =()=>{
    console.log("clicked")
    var text = inputText.value;
    console.log(getUrl(text))
    fetch(getUrl(text))
    .then((response) => response.json())
    .then((json) => {
    var translated = json.contents.translated;
    outputText.innerHTML = translated })
   
}

btnTranslate.addEventListener("click", clickEventHandler);
// dothraki.addEventListener("click", clickEventHandler("d"));
// hodor.addEventListener("click", clickEventHandler("h"));
