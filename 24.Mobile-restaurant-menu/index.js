import { menuArray } from '/data.js'

/* -----Layout------ */

document.querySelector("header").innerHTML = setInnerHeaderText()
document.getElementById("section1").innerHTML = setInnerMainContent()

document.addEventListener('click', function(e){
    if(e.target.classList.value === 'item-content-btn'){
        isOrdered = true
        const theCurrentClickedBtnsId = e.target.id
        const itemContentBtns = document.querySelectorAll('.item-content-btn')
        itemContentBtns.forEach(function(item){
            if(item.id === theCurrentClickedBtnsId){
                orderArray.push(menuArray[theCurrentClickedBtnsId])
            }
        })       
    }
    if(isOrdered){
        document.getElementById("section2").innerHTML = createOrderContent(orderArray)
        document.querySelector('.order-item-box').innerHTML += generateOrderItem(orderArray)
        if(e.target.classList.value === 'removal'){
            removeOrderItem(e.target.dataset.item)
            if(orderArray.length === 0){
                isOrdered = !isOrdered
                document.getElementById("section2").innerHTML = createOrderContent(orderArray)
                return
            }
            document.getElementById("section2").innerHTML = createOrderContent(orderArray)
            document.querySelector('.order-item-box').innerHTML += generateOrderItem(orderArray)
        }
        if(e.target.className === 'complete-order-btn'){
            document.getElementById("wrapper").innerHTML += createCardDetailsModal() 
            document.querySelector('.complete-order-btn').disabled = true 
            document.getElementById("pay-form").addEventListener("submit", (e) => {
                e.preventDefault()
                document.getElementById("pay-form").classList.add('hidden')
                document.getElementById("section2").innerHTML = createOrderConfirmation(document.getElementById('username').value)
                setTimeout(function(){
                    location.reload()
                  }, 1500)
              });
        }
    } 
})

/* ------Functions------ */

function createOrderConfirmation(name){
    return `
        <div class="order-confirmation-wrapper">
            <p>Thanks, ${name}! Your order is on its way!</p>
        </div>
    `
}

function createCardDetailsModal(){
    return `
        <form class="card-details-wrapper" id="pay-form">
            <h4 class="details-title">Enter card details</h4>
            <input type="text" 
                   aria-label="username" 
                   id="username"
                   value= ""
                   class="card-details" 
                   placeholder="Enter your name"
                   required></input>
            <input type="number" 
                   aria-label="card-number" 
                   id="card-number"
                   value= ""
                   class="card-details" 
                   placeholder="Enter card number"
                   required></input>
            <input type="number" 
                   aria-label="card-verification" 
                   id="card-verification"
                   value= ""
                   class="card-details" 
                   placeholder="Enter CVV"
                   required></input>
            <button class="complete-order-btn 
                           pay-btn" 
                           id="pay-btn" 
                           type="submit">Pay</button>
        </form>
    `
}

function removeOrderItem(itemId){
        const matchingElement = orderArray.filter(function(elem){
            return itemId === elem.name
        })[0]
         const indexOfElement = orderArray.indexOf(matchingElement)
         if (indexOfElement > -1){
             orderArray.splice(indexOfElement, 1)
        } 
}

function setInnerHeaderText(){
    return `
        <div id="header-wrapper">
            <h3>Johnny's Burger Joint</h3>
            <h4>Best pizza and burgers in town!</h4>
        </div>
    `
}

function setInnerMainContent(){
    let innerMainHTML = ''
    menuArray.forEach(function(item){
        innerMainHTML += `
            <div class="main-wrapper">
                <span class="item-emoji">${item.emoji}</span>
                <div class="item-content">
                    <h4 class="item-name">${item.name}</h4>
                    <p class="item-ingredients">${item.ingredients}</p>
                    <p class="item-price">${'$'}${item.price}</p>
                </div>
                <button class="item-content-btn" id="${item.id}">+</button>
            </div>
        `
    })
    return innerMainHTML
}

/* ------Global variables------ */

let orderArray = []
let isOrdered = false

function generateOrderItem(arr){
    let innerOrderItem = ''
    arr.forEach(function(item){
        innerOrderItem += `
        <div class="order-item">
            <p class="item-name">${item.name}<span class="removal" data-item=${item.name}>(remove)</span></p>
            <p class="item-price">${'$'}${item.price}</p>
        </div>
    `
    })
     return innerOrderItem
}

function createOrderContent(arr){
    let innerOrderContent = ''
    let totalPrice = 0
    arr.forEach(function(item){
        totalPrice += item.price
        innerOrderContent = `
            <div class="order-wrapper" id="order-wrapper">
                <h4>Your Order</h4>
                <div class="order-item-box">
                </div>
                <div class="order-content-box">
                    <div class="order-total-box">
                        <p class="items-total bold">Total Price:</p>
                        <p class="item-price">${'$'}${totalPrice}</p>
                    </div>
                    <button class="complete-order-btn">Complete Order</button>
                </div>
            </div>
        `
    })
    return innerOrderContent
}
