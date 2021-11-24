let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    getRandomNumber(0, 100)
        .then((num) => {
            outputElement.innerHTML = num + " is sababa"
        })
        .catch((num) => {
            outputElement.innerHTML = num + " is basa"
        })
}

const getRandomNumber = (min, max) => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        if (randomNumber % 2 === 0) {
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    })
}