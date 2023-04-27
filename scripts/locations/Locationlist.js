import { getLocations } from "../database.js"

const locations = getLocations()

export const locationsList = () => {
  let htmlString = '<h2>Harvesting Locations</h2><article class="locations-list">'

    // Create HTML representations of each location here
    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location card">
            <div><img  class="fish__image image--card" src="${location.image}" /></div>
            <div class="fish__name">${location.name}</div>
            <div class="fish__species">${location.location}</div>
            <div class="fish__length">${location.description}</div>
        </section><br>`
    }
    htmlString += `</article>`

    return htmlString
}
