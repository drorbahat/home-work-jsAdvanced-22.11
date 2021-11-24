let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    generateCuteAnimalAfterDelayAsync()
        .then((chosenOne) => {
            console.log(chosenOne + "  is cute")
        })
        .catch((chosenOne) => {
            console.log(chosenOne + " is'nt cute")
        })
}

const generateCuteAnimalAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        let animalList = ["🐈", "🐕", "🐇", "🦜", "🦂", "🕷️", "🪳"]
        let chosenOne = animalList[Math.floor(Math.random() * animalList.length)];
        setTimeout(() => {
            if (chosenOne === "🐈" || chosenOne === "🐕" || chosenOne === "🐇" || chosenOne === "🦜") {
                resolve(chosenOne)
            } else {
                reject(chosenOne)
            }
        }, 1000);
    })
}