const inputEl = document.querySelector(".inp")
const converterBtn = document.querySelector(".convert")
const lengthEl = document.querySelector("#len")
const volumeEl = document.querySelector("#vol")
const massEl = document.querySelector("#m")

inputEl.addEventListener("keyup", e => {
    e.preventDefault()
    if (e.keyCode === 13)
        converterBtn.click()
})

converterBtn.addEventListener("click", function () {
    setLength()
    setVolume()
    setMass()
})

function setLength() {
    lengthEl.innerText = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
}

function setVolume() {
    volumeEl.innerText = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
}

function setMass() {
    massEl.innerText = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms`
}