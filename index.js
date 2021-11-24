let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    doWork(currentTime)
}

const currentTime = () => {
    let now = new Date()
    let currentTimeString = now.toLocaleTimeString()
    console.log(currentTimeString)
}

const doWork = (callback) => {
    console.log("start")
    callback()
    console.log("end")
}