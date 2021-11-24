let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    generate7BoomAfterDelayAsync(44, 900)
        .then((num) => {
            console.log(num + " success")
        })
        .catch((num) => {
            console.log(num + "error")
        })
}



const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise(() => {
        let randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber % 7 === 0) {
            resolve(randomNumber)
        } else {
            reject()
        }
    })
}