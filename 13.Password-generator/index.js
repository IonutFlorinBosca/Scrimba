const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters.length)


//--------------create variables--------------------------------------

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")
let isGenerated = false
let arrOf15Lett = characters.slice(0, 51)
let btn1 = document.getElementById("btnCopy1")
let btn2 = document.getElementById("btnCopy2")

//--------------generate 15 characters passwords----------------------
//iterate through the array, generate a random index, access the random index and push it to the input field on each iteration

function generate15char() {
    if (!isGenerated) {
        for (let i = 0; i < 30; i++) {
            if (i % 2 === 0) {
                let randomIndex = Math.floor( Math.random() * characters.length )
                passwordEl1.value += characters[randomIndex]
            } else {
                let randomIndex = Math.floor( Math.random() * characters.length )
                passwordEl2.value += characters[randomIndex]
            }
        }
    } else if (isGenerated) {
        passwordEl1.value = ''
        passwordEl2.value = ''
        isGenerated = false
        generate15char()
    }
    isGenerated = true 
}
    
//-----------------generate password without special characters--------------------------------
//create a new array, slice the first portion of the whole array and store it in the new array,  iterate through the new array, generate a random index, access the random index and push it to the input field on each iteration

function generate15lett() {
    if (!isGenerated) {
        for (let i = 0; i < 30; i++) {
            if (i % 2 === 0) {
                let randomIndex = Math.floor( Math.random() * arrOf15Lett.length )
                passwordEl1.value += arrOf15Lett[randomIndex]
            } else {
                let randomIndex = Math.floor( Math.random() * arrOf15Lett.length )
                passwordEl2.value += arrOf15Lett[randomIndex]
            }
        }
    } else if (isGenerated) {
        passwordEl1.value = ''
        passwordEl2.value = ''
        isGenerated = false
        generate15lett()
    }
    isGenerated = true 
}
    
//---------------------------generate custom length passwords-----------------------------
//prompt user for input, store the value in a variable, double the value, use the value in the loop condition, rince and repeat the above!

function generateCustom() {
    let customNumber = prompt("Please enter your number (between 2 and 45 - recommended above 12)", 8);
    let doubleNumber = customNumber * 2
    if (customNumber < 2 || customNumber > 45) {
        alert("The number you have entered is invalid!")
    } else {
        passwordEl1.value = ''
        passwordEl2.value = ''
        for (let i = 0; i < doubleNumber; i++) {
            if (i % 2 === 0) {
                let randomIndex = Math.floor( Math.random() * characters.length )
                passwordEl1.value += characters[randomIndex]
            } else {
                    let randomIndex = Math.floor( Math.random() * characters.length )
                    passwordEl2.value += characters[randomIndex]
            } 
        } 
    }
}

//----------------------------copy the text and alert it------------------------------------

btn1.onclick = function() {
    //Select the text
    passwordEl1.select()
    //Copy the text
    document.execCommand("copy")
    //Alert the text
    alert("The password you copied is: " + passwordEl1.value)
}

btn2.onclick = function() {
    //Select the text
    passwordEl2.select()
    //Copy the text
    document.execCommand("copy")
    //Alert the text
    alert("The password you copied is: " + passwordEl2.value)
}