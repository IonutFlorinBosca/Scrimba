export function clearRadioInputs(){
    const radioInputs = document.querySelectorAll('input[type="radio"]')
    for (let input of radioInputs){
        input.checked = false
        input.parentElement.classList.remove('input-radio-active')
    }
}

export function clearCheckboxInputs(){
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]')
    for (let input of checkboxInputs){
        input.checked = false
    }
}

export function returnInnerHTML(arr){
    return `
    <img src="images/slide-left.png" class="left-arrow arrows secondary-btn" id="left-arrow">
    <img src="${arr[0].image}" class="gift-img" id="gift-img" alt="${arr[0].alt}">
    <img src="images/slide-right.png" class="right-arrow arrows secondary-btn" id="right-arrow">   
    `
}

export function displayGifts(window){
    window.classList.add('display-on')
}

export function closeGiftsWindow(window){
    window.classList.remove('display-on')
}


export function createSelectedAgeArray(arr, inp){
    const ageArray = arr.filter(function(gift){
        return gift.person.includes(inp)
    })
    return ageArray
}

export function createSelectedGenderArray(arr, inp){
    const genderArray = arr.filter(function(gift){
        return gift[inp]
    })
    return genderArray
}

export function previousGift(arr, counter){
    document.getElementById("gift-img").src = arr[counter].image
    document.getElementById("gift-img").alt = arr[counter].alt        
}

export function nextGift(arr, counter){
    document.getElementById("gift-img").src = arr[counter].image
    document.getElementById("gift-img").alt = arr[counter].alt
}

export function openGiftToBuy(arr, counter){
    const linkGiftToBuy = arr[counter].link
    window.open(linkGiftToBuy)
}