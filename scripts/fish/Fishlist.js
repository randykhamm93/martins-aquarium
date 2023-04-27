// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<h2>Martin\'s Fish</h2><article class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section><br>`
    }
    htmlString += `</article>`

    return htmlString
}
 
export const mostHolyFish = () => {
    const holyFish = []
    const fishes = getFish()
    
    // 3, 6, 9, 12, etc... fish
    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish.name)
        }
    }
    
    return holyFish
}


export const soldierFish = () => {
    const soldiers = []
    const fishes = getFish()

    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish.name)
        }
    }
    return soldiers
}


export const nonHolyFish = () => {
    const regularFish = []
    const fishes = getFish()
    
    // Any fish not a multiple of 3 or 5
    for (const fish of fishes) {
        if (fish.length % 3 !== 0 && 5 !== 0) {
            regularFish.push(fish.name)
        }
    }
    return regularFish
}
