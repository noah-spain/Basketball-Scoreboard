let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

const home1 = document.getElementById("1home")
const home2 = document.getElementById("2home")
const home3 = document.getElementById("3home")

const guest1 = document.getElementById("1guest")
const guest2 = document.getElementById("2guest")
const guest3 = document.getElementById("3guest")

let homeCount = 0

home1.addEventListener("click", function(){
    homeScore.innerText = ++homeCount

})

home2.addEventListener("click", function(){
    homeScore.innerText = homeCount += 2
})

home3.addEventListener("click", function(){
    homeScore.innerText = homeCount += 3
})

let guestCount = 0 

guest1.addEventListener("click", function(){
    guestScore.innerText = ++ guestCount
})

guest2.addEventListener("click", function(){
    guestScore.innerText = guestCount += 2
})

guest3.addEventListener("click", function(){
    guestScore.innerText = guestCount += 3
})

const newGame = document.getElementById("new-game")

newGame.addEventListener("click", function() {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = 0
    guestScore.innerText = 0
})

