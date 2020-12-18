/* 
import { testPurses } from "./shortChangeTests.js"
    Write a function enoughChange
    
    Given an object representing a coin purse, and a price
        it should return true/false depending on whether 
        or not you have enough change to complete a 
        purchase at the given price
    
    The function should also update the "counters"
        such that they reflect the quantities in
        the test case
        
    You should then use this function to update the 
        purchaseConfirmation div to display whether
        or not you can afford the purchase with the
        coin quantities provided
        
    Finally, create nextCase and previousCase 
        buttons to cycle through the test cases 
    
    Refresh the mini-browser or save this file to
        load new test cases!
*/

let testPurses = Array(15).fill(0).map(a => {
    return {
        quarters: roll(0, 15),
        dimes: roll(0, 30),
        nickels: roll(0, 40),
        pennies: roll(0, 50),
        price: Number(roll(0, 10, 1).toFixed(2))
    }
})

const purchaseConfirmation = document.getElementById("purchase-confirmation")
const quarterCounter = document.getElementById("quarter-count")
const dimeCounter = document.getElementById("dime-count")
const nickelCounter = document.getElementById("nickel-count")
const pennyCounter = document.getElementById("penny-count")
let arrCount = 0
let sampleTest = testPurses[0]
const uBound = testPurses.length - 1

document.getElementById('previous-case').addEventListener('click', prevClick)
document.getElementById('next-case').addEventListener('click', nextClick)

function prevClick() {
    arrCount === 0 ? arrCount = uBound : arrCount--
    enoughChange(testPurses[arrCount])
}

function nextClick() {
    arrCount === uBound ? arrCount = 0 : arrCount++
    enoughChange(testPurses[arrCount])
}

function enoughChange(sampleTest) {
    let quarters = sampleTest.quarters
    let dimes = sampleTest.dimes
    let nickels = sampleTest.nickels
    let pennies = sampleTest.pennies
    let price = sampleTest.price
    
    quarterCounter.innerHTML = quarters
    dimeCounter.innerHTML = dimes
    nickelCounter.innerHTML = nickels
    pennyCounter.innerHTML = pennies
    let ttl = ((quarters * 25) + (dimes * 10) + (nickels * 5) + (pennies * 1))/100
    
    let resp = ttl >= price ? "SOLD!" : "Not gonna happen..."
    
    purchaseConfirmation.innerHTML = "Test #" + (arrCount+1) + "<br />Coins: $" + ttl.toFixed(2) + "<br />Price: $" + price.toFixed(2) + "<br />" + resp
}

function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

enoughChange(sampleTest)


