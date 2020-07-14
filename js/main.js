
let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let btn = document.getElementById('btn')
let arr = [description, calories, carbs, protein]

btn.addEventListener('click', function(e){
    e.preventDefault()
    if(validation2(arr) === true){
        alert('Request enviado de forma exitosa')
    }else{
        alert('Faltan campos por rellenar')
    }    
})

const validation2 = (arr) => {
    let state = 0
    arr.map((x) => {
        x.value === '' ? x.classList.add('is-invalid') : state++
    })
    if(state === 4){return true}
    else{return false}
}

description.addEventListener('focus', ()=> description.classList.remove('is-invalid'))
calories.addEventListener('focus', ()=> calories.classList.remove('is-invalid'))
carbs.addEventListener('focus', ()=> carbs.classList.remove('is-invalid'))
protein.addEventListener('focus', ()=> protein.classList.remove('is-invalid'))

/*let car = {
    color: 'red',
    km: 0,
    year: 2019
}*/
// Copia la referencia al objetos, por lo que si se modifica uno, los cambios dse ven reflejados
// en ambos objetos.
/*let newCar = new car

//Copia el objeto, por lo que si se realizan cambios son excluyentes al objeto original
let newCar2 = Object.assign({}, car)

//parse convierte un string JSON a un objeto de JS
//stringify convierte un objeto JS  a un String JSON
//Esta variable copia objetos anidados dentro de otros objetos, sin solo copiar sus referencias
let NewCar3 = JSON.parse(JSON.stringify(car))*/