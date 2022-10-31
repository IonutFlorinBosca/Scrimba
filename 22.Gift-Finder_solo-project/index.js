//Separation of conscerns - the data object and part of the functions are separated
import { giftsData, } from '/data.js'
import { clearRadioInputs, clearCheckboxInputs } from '/functions.js'
import { returnInnerHTML } from './functions.js'
import { displayGifts, closeGiftsWindow, openGiftToBuy } from './functions.js'
import { createSelectedAgeArray, createSelectedGenderArray } from '/functions.js'
import { previousGift, nextGift } from '/functions.js'

//Fetch all the elements that need to be manipulated from HTML
const ageList = document.getElementById("age-list")
const giftBoxFindBtn = document.getElementById("gift-box-find-btn")
const giftSelectionWindow = document.getElementById("gift-selection-window")
const giftBoxCloseBtn = document.getElementById("gift-box-close-btn")
const giftBoxBuyBtn = document.getElementById("gift-box-buy-btn")
const giftSlider = document.getElementById("gift-slider")
const genderContainer = document.getElementById("gender-container")

//Set the initial state of the window that displays the items 
//when the window is activated
giftSlider.innerHTML = returnInnerHTML(giftsData)

//Declare variables necessary for creating, storing and manipuating data
let sliderCounter = 0
let forBothArray = []
let notUniqueArray= []
let customAgeArray = []
let customGenderArray = []
let customAgeGenderArray = []
let valueAgeInput = ''
let valueGenderInput = []

//After the data is initialized and the window is
//displayed grab the arrow elements and add functionality
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
leftArrow.addEventListener('click', function(){
    sliderCounter--
    if (sliderCounter < 0){
        sliderCounter = 0
    }
    previousGift(giftsData, sliderCounter)
})
rightArrow.addEventListener('click', function(){
    sliderCounter++
    if (sliderCounter > giftsData.length - 1){
        sliderCounter = (giftsData.length - 1)
    }
    nextGift(giftsData, sliderCounter)
})

//Give the buy button functionality for the default display of data
giftBoxBuyBtn.addEventListener('click', runEvent)
    function runEvent(){
    openGiftToBuy(giftsData, sliderCounter)
}

//When the container that holds the age categories state changes,
//add functionality - make sure only one input can be selected and
//a new array is created based on the selected choice
ageList.addEventListener('change', function(e){
    clearRadioInputs()
    e.target.checked = true
    e.target.parentElement.classList.add('input-radio-active')
    const targetValue = e.target.value
    customAgeArray = createSelectedAgeArray(giftsData, targetValue)
})

//When the container that holds the gender categories state changes,
//add functionality - if one or both options are selected, 
//create arrays for each respectively, map through those arrays
//and filter out any duplicates - store the result in a new array specific
//for gender selection
genderContainer.addEventListener('change', function(e){
    const targetValue = e.target.value
    if (document.querySelectorAll('input[type="checkbox"]:checked')){
        forBothArray.push(createSelectedGenderArray(giftsData, targetValue))
        forBothArray.map(function(arr){
            const currentArray = arr.map(function(el){
                if(el[targetValue]){
                    notUniqueArray.push(el)
                }
            })
        })
        customGenderArray = notUniqueArray.filter(function(item, pos) {
            return notUniqueArray.indexOf(item) == pos;
        })
    }
})

//   if both an age group and a gender group or both an age group
//   and both gender groups are selected create, filter out  
//   duplicates and store the data in a new array
function generateCustomAgeGenderArray(){
    if(document.querySelector('input[type="checkbox"]:checked') 
    && document.querySelector('input[type="radio"]:checked')){  
    }
    document.querySelectorAll('input[type="radio"]').forEach(function(el){
        if(el.checked){
            valueAgeInput = el
        }
    })
    document.querySelectorAll('input[type="checkbox"]').forEach(function(el){
        if(el.checked){
            valueGenderInput.push(el)
        }
    })
    let notUniqueAgeGenderArray = []
    let uniqueAgeGenderArray = []
    let finalGenderArray = []
    notUniqueAgeGenderArray = customAgeArray.concat(customGenderArray)
    uniqueAgeGenderArray = notUniqueAgeGenderArray.filter(function(item, pos) {
        return notUniqueAgeGenderArray.indexOf(item) == pos;
    })
    if(document.querySelectorAll('input[type="checkbox"]:checked').length == 1){
        const genderSelect = document.querySelectorAll('input[type="checkbox"]:checked')[0].defaultValue
        finalGenderArray = uniqueAgeGenderArray.filter(function(el){
            return el.person.includes(valueAgeInput.id)
        })
        customAgeGenderArray = finalGenderArray.filter(function(obj){
            return obj[genderSelect]
        })
    } else {
        customAgeGenderArray = uniqueAgeGenderArray
    }
}


giftBoxFindBtn.addEventListener('click', function(){
    if(!document.querySelector('input[type="checkbox"]:checked') 
    && !document.querySelector('input[type="radio"]:checked')){
        //If no radio or checkbox is selected, display window with default values
        displayGifts(giftSelectionWindow)
    } 
    //If only radio is selected, display window with values from the 
    //customAge array
     else if(!document.querySelector('input[type="checkbox"]:checked') 
    && document.querySelector('input[type="radio"]:checked')){
        giftSlider.innerHTML = returnInnerHTML(customAgeArray)
        displayGifts(giftSelectionWindow)
        const leftArrow = document.getElementById("left-arrow")
        const rightArrow = document.getElementById("right-arrow")
        leftArrow.addEventListener('click', function(){
            sliderCounter--
            if (sliderCounter < 0){
                sliderCounter = 0
            }
            previousGift(customAgeArray, sliderCounter)
        })
        rightArrow.addEventListener('click', function(){
            sliderCounter++
            if (sliderCounter > customAgeArray.length - 1){
                sliderCounter = (customAgeArray.length - 1)
            }
            nextGift(customAgeArray, sliderCounter)
        })
        giftBoxBuyBtn.removeEventListener('click', runEvent);
        giftBoxBuyBtn.addEventListener('click', runAgeEvent)
        function runAgeEvent(){
            openGiftToBuy(customAgeArray, sliderCounter)
        }
    } 
    //If only checkbox is selected, display window with values from the
    //customGender array
      else if(document.querySelector('input[type="checkbox"]:checked') 
    && !document.querySelector('input[type="radio"]:checked')){
        giftSlider.innerHTML = returnInnerHTML(customGenderArray)
        displayGifts(giftSelectionWindow)
        const leftArrow = document.getElementById("left-arrow")
        const rightArrow = document.getElementById("right-arrow")
        leftArrow.addEventListener('click', function(){
            sliderCounter--
            if (sliderCounter < 0){
                sliderCounter = 0
            }
            previousGift(customGenderArray, sliderCounter)
        })
        rightArrow.addEventListener('click', function(){
            sliderCounter++
            if (sliderCounter > customGenderArray.length - 1){
                sliderCounter = (customGenderArray.length - 1)
            }
            nextGift(customGenderArray, sliderCounter)
        })
        giftBoxBuyBtn.removeEventListener('click', runEvent);
        giftBoxBuyBtn.addEventListener('click', runGenderEvent)
        function runGenderEvent(){
            openGiftToBuy(customGenderArray, sliderCounter)
        }
    }
    //If both checkbox and radio are selected, display window with values from the
    //customAgeGenderArray array
    else if(document.querySelector('input[type="checkbox"]:checked') 
    && document.querySelector('input[type="radio"]:checked')){
        generateCustomAgeGenderArray()
        giftSlider.innerHTML = returnInnerHTML(customAgeGenderArray)
        displayGifts(giftSelectionWindow)
        const leftArrow = document.getElementById("left-arrow")
        const rightArrow = document.getElementById("right-arrow")
        leftArrow.addEventListener('click', function(){
            sliderCounter--
            if (sliderCounter < 0){
                sliderCounter = 0
            }
            previousGift(customAgeGenderArray, sliderCounter)
        })
        rightArrow.addEventListener('click', function(){
            sliderCounter++
            if (sliderCounter > customAgeGenderArray.length - 1){
                sliderCounter = (customAgeGenderArray.length - 1)
            }
            nextGift(customAgeGenderArray, sliderCounter)
        })
        giftBoxBuyBtn.removeEventListener('click', runEvent);
        giftBoxBuyBtn.addEventListener('click', runAgeGenderEvent)
        function runAgeGenderEvent(){
            openGiftToBuy(customAgeGenderArray, sliderCounter)
        }
    }

    //make sure that the slider and the buy button is working
})

//Close the window and reset values to the default values
giftBoxCloseBtn.addEventListener('click', function(){
    closeGiftsWindow(giftSelectionWindow)
    clearRadioInputs()
    clearCheckboxInputs()
    sliderCounter = 0
    
    location.reload()
})

    