let outputElement = document.getElementById("output")
let button = document.getElementById("runCodeButton")

const runCode = () => {
    doWork(currentTime)
}

const currentTime = () => {
    setTimeout(() => {
        let now = new Date()
        let currentTimeString = now.toLocaleTimeString()
        console.log(currentTimeString)
        
    }, 3000);
}

const doWork = (callback) => {
    console.log("start")
    callback()
    console.log("end")
}