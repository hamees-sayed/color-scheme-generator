const btn = document.getElementById("btn")

btn.addEventListener("click", getColorScheme)

function getColorScheme() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor()}&mode=${schemeValue()}&count=5`)
        .then(resp => resp.json())
        .then(data => fillColor(data))
}

function fillColor(data) {
    for (let i = 0; i < data.colors.length; i++) {
        const colorHex = data.colors[i].hex.value

        document.getElementById(`bar${i}`).style.background = colorHex
        document.getElementById(`hex${i}`).innerText = colorHex
    }
}

function seedColor() {
    let seedColor = document.getElementById("seed-color").value
    return seedColor.slice(1)
}

function schemeValue() {
    let schemeValue = document.getElementById("color-scheme").value
    return schemeValue
}

getColorScheme()