const btn = document.getElementById("btn")
let scheme = document.getElementById("color-scheme")

btn.addEventListener("click", getColorScheme)

function getColorScheme(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor()}&mode=${schemeValue()}&count=6`)
    .then(resp => resp.json())
    .then(data => {
        data.colors.map(color => {
            console.log(color.hex.value)
        })
    })
}


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