let btnSave = document.querySelector('#btnSave')
let btnDelete = document.querySelector('#btnDelete')
let lastName = document.querySelector('#lastName')

window.addEventListener('load', function(){
    lastName.innerHTML = localStorage.getItem('savedName')
})

//salva il nome dato in input
btnSave.addEventListener('click', function(){
    lastName.innerHTML = ''
    let userName = document.querySelector('#userName').value
    localStorage.setItem('savedName', userName)
    lastName.innerHTML = userName
})

//elinima i dati salvati in memoria se ci sono 

btnDelete.addEventListener('click', function(){
    if(localStorage.getItem('savedName')){
        localStorage.clear()
        lastName.innerHTML = ''
    }
})



