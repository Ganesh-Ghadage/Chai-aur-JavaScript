const colorBtn = document.querySelectorAll('.button')

colorBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        document.body.style.backgroundColor = event.target.id
    })
})
