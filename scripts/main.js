// Import the FishList function from the correct module
import { getFish } from './database.js'

import { fishList } from './fish/Fishlist.js'
import { locationsList } from './locations/Locationlist.js'

import {tipList} from './tips/Tiplist.js'

const allFish = getFish()
const allTips = tipList()

for (const fish of allFish) {
    console.log(fish)
}

for (const tip of allTips) {
    console.log(tip)
}


/*
What is the CSS selector for the element where you
want to display the fish?

Use . for elements with a "class" attribute
Use # for elements with an "id" attribute
*/    

const parentHTMLElement = document.querySelector(".fish-list")

parentHTMLElement.innerHTML = fishList()

const tipsHTMLElement = document.querySelector(".tank-care-tips")

tipsHTMLElement.innerHTML = tipList()

const locationsHTMLElement = document.querySelector(".locations-list")

locationsHTMLElement.innerHTML = locationsList()
