const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const avatar = document.getElementById("avatar")
const name = document.getElementById("name")
const place = document.getElementById("location")
const post = document.getElementById("post")
const username = document.getElementById("username")
const comment = document.getElementById("comment")
const heartIcon = document.getElementById("heart-icon")
const likes = document.getElementById("likes")
const btnRight = document.getElementById("btn-right")
const btnLeft = document.getElementById("btn-left")
let counter = 0

    avatar.src = posts[counter].avatar
    name.textContent = posts[counter].name
    place.textContent = posts[counter].location
    post.src = posts[counter].post
    likes.textContent = posts[counter].likes + " likes"
    username.textContent = posts[counter].username
    comment.textContent = posts[counter].comment

function renderContent() {
    if (counter < 0) {
        counter = 0
    } else if (counter > posts.length - 1) {
        counter = posts.length - 1
    } else {
        avatar.src = posts[counter].avatar
        name.textContent = posts[counter].name
        place.textContent = posts[counter].location
        post.src = posts[counter].post
        likes.textContent = posts[counter].likes + " likes"
        username.textContent = posts[counter].username
        comment.textContent = posts[counter].comment
    }
}

function slideNext() {
    counter++
    renderContent()
}

function slidePrevious() {
    counter--
    renderContent()
}


btnRight.addEventListener("click", slideNext)
btnLeft.addEventListener("click", slidePrevious)
heartIcon.addEventListener("click", function() {
    posts[counter].likes++
    likes.textContent = posts[counter].likes + " likes"
})