import { getTips } from "../database.js"

const tips = getTips()

export const tipList = () => {
  // Invoke the function that you imported from the database module
  // Start building a string filled with HTML syntax
  let htmlString = '<h2>Tank Care Tips</h2><aside class="tank-care-tips"><ul>'

  // Create HTML representations of each tip here
  for (const tip of tips) {

      // Why is there a backtick used for this string?
      htmlString += `<li class="tip-card">
          <div class="tip__description">${tip.description}</div>
      </li><br>`
  }
  htmlString += `</ul></aside>`

  return htmlString
}
