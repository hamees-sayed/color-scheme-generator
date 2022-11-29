const btn = document.getElementById("btn")
let scheme = document.getElementById("color-scheme")
const postArray = []

btn.addEventListener("click", getColorScheme)

function getColorScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor()}&mode=${schemeValue()}&count=5`)
        .then(resp => resp.json())
        .then(data => {
            data.colors.map(color => {
                return color.hex.value
            })
        })
}

console.log(getColorScheme())

function seedColor() {
    let seedColor = document.getElementById("seed-color").value
    return seedColor.slice(1)
}


function schemeValue(){
    let schemeValue = scheme.value
    return schemeValue
}
scheme.onchange = schemeValue

schemeValue()


// traverse over the html NodeList with forEach
// have a let index with number initialised and iterate it for data.colors array
// then get the array of colors and put them into html