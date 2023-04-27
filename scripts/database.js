const database = {
  fish: [
    {
      name: "Bart",
      species: "Clownfish",
      color: "orange and white",
      location: "Red Sea and Pacific Ocean",
      food: "crustaceans",
      length: 3,
      lifespan: 3,
      image: "https://media.gettyimages.com/id/520927770/photo/clown-anemonefish-australia.jpg?s=612x612&w=0&k=20&c=jycn3_-uRQcb_6bWRMR-7gJKXcir6xp4bVSSJmz9NXE="
    },
    {
      name: "Devin the Devil",
      species: "Devil's Hole Pupfish",
      color: "metallic blue",
      location: "Death Valley, Nevada",
      food: "algae",
      length: .75,
      lifespan: 1,
      image: "https://media.gettyimages.com/id/564046301/photo/a-pupfish-swims-above-the-rocks-at-devils-hole-human-error-is-being-blamed-for-the-deaths-of-1.jpg?s=612x612&w=0&k=20&c=4rtT28seMaEUl01eXCEmj_NmzYeohj6UV1eS6D1xJvQ=" 
    },
    {
      name: "Ole Red",
      species: "Red Handfish",
      color: "red",
      location: "Southeastern Tasmania from the Port Arthur region to Marion Bay including Frederick Henry Bay near Hobart",
      food: "crustaceans and worms",
      length: 3,
      lifespan: 3,
      image: "https://media.gettyimages.com/id/179793754/photo/red-handfish-thymichthys%C2%A0politus-rare-and-critically-endangered-species-known-only-from-this.jpg?s=612x612&w=0&k=20&c=F5HR6ZLo6ZbXWEbwh4vPE1an28gZkcM3SYPioFk1mGI="
    },
    {
      name: "Sal",
      species: "Sakhalin Sturgeon",
      color: "olive-green",
      location: "Tumnin River, Russia, and the Sea of Japan",
      food: "Shrimp, crabs, worms",
      length: 90,
      lifespan: 30,
      image: "https://media.istockphoto.com/id/689493730/photo/alive-sturgeon-in-aquarium.jpg?s=612x612&w=0&k=20&c=p8UjuhznRLQU1agT55THx2lvIcOYwOYrbIS1jhGOCpU=",
    },
    {
      name: "Dory",
      species: "Blue Tang",
      color: "blue and yellow",
      location: "Western Atlantic Ocean from New York and Bermuda to the Gulf of Mexico, south to Brazil",
      food: "plankton",
      length: 6,
      lifespan: 6,
      image: "https://media.gettyimages.com/id/552774337/photo/close-up-of-palette-surgeonfish-in-aquarium.jpg?s=612x612&w=0&k=20&c=BUsuww_rJlXAvXqDDchJ2LibEqIQM2HxxV_-2fkjCO4="
    },
    {
      name: "Bruce",
      species: "Great White Shark",
      color: "gray",
      location: "United States, South Africa, Japan, Oceania, Chile, and the Mediterranean including the Sea of Marmara and Bosphorus",
      food: "fish",
      length: 194,
      lifespan: 70,
      image: "https://media.gettyimages.com/id/157429099/photo/great-white-shark.jpg?s=612x612&w=0&k=20&c=4zZFWv52QxMFNw76E8iiFxYozXMvg8QdY_E7y2QV2Bk="
    },
    {
      name: "Max",
      species: "Betta fish",
      color: "blue and red",
      location: "Thailand",
      food: "Insects and larvae",
      length: 3,
      lifespan: 3,
      image: "https://media.gettyimages.com/id/1224784541/photo/close-up-of-male-rose-tail-mal-betta-fish-swimming-in-water.jpg?s=612x612&w=0&k=20&c=yBJ-UF1CEA5Y5-Q2C_gIetkoiWGD7tBT9Y5lmWRNDtg="
    },
    {
      name: "Gus",
      species: "Goldfish",
      color: "orange",
      location: "China",
      food: "Fish flakes, pellets",
      length: 5,
      lifespan: 10,
      image: "https://media.gettyimages.com/id/642062284/photo/beautiful-red-orange-goldfish-pet-in-house-tank-or-aquarium.jpg?s=612x612&w=0&k=20&c=nXKwQt4yn1F1r3gai_nUH0zmKtGfv-7UChAIQtONgqc="
    },
    {
      name: "Angel",
      species: "Blue Zebra Angelfish",
      color: "bright blue/turquoise",
      location: "South American Rivers",
      food: "Small fish",
      length: 10,
      lifespan: 10,
      image: "https://media.istockphoto.com/id/1199317978/photo/portrait-of-a-zebra-angelfish-in-tank-fish-with-blurred-background.jpg?s=612x612&w=0&k=20&c=lkhq6nnZHMAEjzMUNK8XGeWhqKEelxvLXqpxLG9oJ5A="
    }

  ],
  tips: [
    {
      id: 1,
      title: "Maintain Consistent Water Temperature",
      description: "Angelfish thrive in water that is consistently between 76 and 82 degrees Fahrenheit. Use a heater to maintain a stable temperature."
    },
    {
      id: 2,
      title: "Provide Plenty of Hiding Places",
      description: "Many fish appreciate plenty of hiding places in their tanks. Consider adding plants and rocks to your aquarium."
    },
    {
      id: 3,
      title: "Maintain water quality",
      description: "Rare fish are often more sensitive to changes in water quality than common fish. Therefore, it's important to test your water regularly and keep your tank's water parameters stable."
    },
    {
      id: 4,
      title: "Provide a suitable habitat",
      description: "Rare fish may have specific habitat requirements. Research the natural environment of your fish and replicate it as closely as possible in your tank. This may include specific decorations, substrate, or plants."
    },
    {
      id: 5,
      title: "Feed a balanced diet",
      description: "Different types of rare fish have varying dietary requirements. Be sure to research the specific dietary needs of your fish and provide a varied and balanced diet. Overfeeding can lead to poor water quality and other health problems, so be sure to feed only what your fish need."
    },
    {
      id: 6,
      title: "Proper water changes",
      description: "When doing a water change, make sure to use a water conditioner to neutralize chlorine and other harmful chemicals in tap water. This will help maintain a healthy environment for your fish and prevent any potential health problems."
    },
    // ... other tip objects
  ],
  locations: [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4IXZoVWbY8Rvzwlgx5mUNmoyhaWLtIqvhlg&usqp=CAU",
      name: "Devil's Hole",
      location: "Death Valley, Nevadea",
      description: "Devil's Hole is a natural geologic formation located in the Amargosa Valley of southern Nevada. It\'s a deep water-filled cave that\'s home to a critically endangered species of fish called the Devil\'s Hole pupfish. The site is protected as part of the Ash Meadows National Wildlife Refuge and is open to the public for viewing through guided tours"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqVB8Ond0KDF-XffuUcxiPWjgU9m7e6crIw&usqp=CAU",
      name: "Frederick Henry Bay",
      location: "Australia",
      description: "Frederick Henry Bay is a picturesque bay located on the east coast of Tasmania, Australia. It is known for its pristine white sand beaches and crystal-clear waters, making it a popular destination for swimming, fishing, and other water activities. The bay is surrounded by stunning natural scenery, including rugged cliffs and lush forests. Visitors can also explore the nearby towns and villages, which offer a range of dining, shopping, and accommodation options."
    },
    {
      image: "data:image/jpeg;base64,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",
      name: "Tumnin River",
      location: "Russia",
      description: "The Tumnan River is a picturesque waterway that winds its way through the pristine forests of the Russian Far East. Flowing for over 200 kilometers, the river is home to a diverse array of wildlife, including salmon, trout, and various species of birds. Visitors can enjoy kayaking and fishing trips along the river, taking in the stunning natural scenery and immersing themselves in the tranquility of the Russian wilderness."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvYx_VRcQxiFTs1dtM1CCYI8GBkKHWg9_EcF9H2BXrSTgNteaZeTp&s=0",
      name: "Red Sea",
      location: "Egypt",
      description: "One of the warmest of the world's seas, the Red Sea is in the Middle East, between Egypt and Saudi Arabia. The Red Sea is completely surrounded by desert. The Red Sea is very salty, and also high in nutrients and plankton (tiny plants and animals). It is connected to the Mediterranean Sea by the massive Suez Canal."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2bvy7MEJD6-8blIoQF-lIBkV6oRiwWK22w&usqp=CAU",
      name: "Western Atlantic Ocean",
      location: "Between North and South America",
      description: "The Atlantic Ocean lies between North and South America on the west and Europe and Africa on the east."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEE-_Bt7ypUFvNnQGn5m56N-BFfNdkW3NNQ&usqp=CAU",
      name: "Pacific Ocean",
      location: "Between Americas to the East of the Pacific Ocean basin and the Asian and Australian continents to the West.",
      description: "The Pacific Ocean is the largest and deepest of Earth's five oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean (or, depending on definition, to Antarctica) in the south, and is bounded by the continents of Asia and Oceania in the west and the Americas in the east."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKHnf9GP_r9cGCBftYEbPCsH1v6VBcBBuzQ&usqp=CAU",
      name: "Thailand",
      location: "Southeast Asia",
      description: "Located in the heart of mainland Southeast Asia, Thailand is a country of mountains, hills, plains and a long coastline along the Gulf of Thailand (1,875 km) and the Andaman Sea (740 km), not including the coastlines of some 400 islands, most of them in the Andaman Sea."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LFEpV0SS7bWYSwl64SVAxq68QFuceXojFQ&usqp=CAU",
      name: "China",
      location: "Eastern Asia",
      description: "China is located in eastern Asia. Today it occupies approximately 9.6 million square kilometers (3.7 million square miles), or nearly one quarter of Asia's land, making it almost as large as the whole of Europe."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4s6w1IKQ_wlmo6J4k4kqxBysHgpaiVTSelQ&usqp=CAU",
      name: "Amazon River",
      location: "South America",
      description: "The Amazon River is the largest river in South America and the largest river in the world. Its complex tributary system spans approximately one-third of the South American continent. The river is fed by more than 1000 sources, originating in Brazil, Peru, Ecuador, Colombia, Venezuela, and Bolivia."
    }
  ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
  return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
  return database.locations.map(locations => ({...locations}))
}
