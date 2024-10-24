const clock = document.getElementById('clock')


// console.log(date.getHours(), date.getMinutes(), date.getSeconds())

setInterval(() => {
    const date = new Date()
    clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`
}, 1000)