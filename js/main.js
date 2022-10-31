const form = document.getElementById('form-modal');
const orderServiceBtn = document.getElementById('order-service')
const sendDataBtn = document.getElementById('send-btn')

orderServiceBtn.addEventListener('click', ()=>{
    form.classList.remove('modal--invisible');
})

sendDataBtn.addEventListener('click', ()=>{
    form.classList.add('modal--invisible')
})