/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.querySelector("button")
const input = document.querySelector("input")
const metersP = document.getElementById("metersP")
const meterInFeet = 3.281
const literInGallon = 0.264
const kiloInPound = 2.204
const feetInMeter = 0.304
const gallonInLiter = 3.785
const poundInKilo = 0.453

function convertAll() {
    metersToFeet()
    feetToMeters()
    litersToGallons()
    gallonsToLiters()
    kiloToPound()
    poundToKilo()
}

function metersToFeet() {
    const converted = `${input.value} meters = ${(input.value * meterInFeet).toFixed(3)} feet`
    return metersP.textContent = converted
}

function feetToMeters() {
    const converted = `${input.value} feet = ${(input.value * feetInMeter).toFixed(3)} meters`
    return feetP.textContent = converted
}

function litersToGallons() {
    const converted = `${input.value} liters = ${(input.value * literInGallon).toFixed(3)} gallons`
    return litersP.textContent = converted
}

function gallonsToLiters() {
    const converted = `${input.value} gallons = ${(input.value * gallonInLiter).toFixed(3)} liters`
    return gallonsP.textContent = converted
}

function kiloToPound() {
    const converted = `${input.value} kilo = ${(input.value * kiloInPound).toFixed(3)} pounds`
    return kiloP.textContent = converted
}

function poundToKilo() {
    const converted = `${input.value} pounds = ${(input.value * poundInKilo).toFixed(3)} kilo`
    return poundP.textContent = converted
}

btn.addEventListener("click", convertAll)