let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    doWork(currentTime)
}

const currentTime = () => {
    let now = new Date()
    let currentTimeString = now.toLocaleTimeString()
    setTimeout(() => {
        console.log(currentTimeString)
        
    }, 3000);
}

const doWork = (callback) => {
    console.log("start")
    callback()
    console.log("end")
}