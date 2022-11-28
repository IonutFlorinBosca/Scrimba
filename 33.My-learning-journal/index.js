import { mySoloProjects } from '/data.js'

const articleListing = document.getElementById("article-listing")
const viewMoreBtn = document.querySelector('.view-more')

articleListing.innerHTML += generateArticleListings()

//Keep track of the items loaded
let currentItem = 3

viewMoreBtn.onclick = viewMoreElements

function viewMoreElements () {
    //Get all of the items from within .article-listing-container
    let boxes = [...document.querySelectorAll('.article-listing-container .article-listing-wrapper')]
    //Iterate through the array ignoring the items currently loaded and with each
    //iteration add another layer of 3 components
    for (let i = currentItem; i < currentItem + 3; i++) {
        //Display the next 3 elements
        boxes[i].style.display = 'flex'
    }
    //Increase the count
    currentItem += 3

    //Display the last 2 elements or the last element with the last 3 items batch if there
    //are less than 3 elements to be displayed
    if ((currentItem === boxes.length - 2) && (boxes.length % currentItem === 2)) {
        boxes[currentItem + 1].style.display = 'flex'
        boxes[currentItem].style.display = 'flex'
        viewMoreBtn.classList.add('hidden')
    }
    if ((currentItem === boxes.length - 1) && (boxes.length % currentItem === 1)) {
        boxes[currentItem].style.display = 'flex'
        viewMoreBtn.classList.add('hidden')
    }
    if (currentItem >= boxes.length) {
        viewMoreBtn.classList.add('hidden')
    }
}

function generateArticleListings() {
    let articleListings = ''
    for (let i = mySoloProjects.length - 1; i >= 0; i--) {
        articleListings += `
            <div class="article-listing-wrapper">
                <div class="article-listing-video">
                    ${mySoloProjects[i].videoSrc}
                </div>
                <h2 class="article-listing-name">${mySoloProjects[i].name}</h2>
                <p class="article-listing-text">${mySoloProjects[i].text}</p>
                <a  href=${mySoloProjects[i].link} 
                    class="article-listing-link" 
                    target=”_blank”> Access Project
                </a>
                <div class="article-listing-icons">
                    <span> <ion-icon name="calendar-outline"></ion-icon> ${mySoloProjects[i].date} </span>
                    <span> <ion-icon name="person-circle-outline"></ion-icon> by Ionut </span>
                </div>
            </div>
        `
    }
    return articleListings
}
