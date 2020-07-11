
let description = document.getElementById('description').value
let calories = document.getElementById('calories').value
let carbs = document.getElementById('carbs').value
let protein = document.getElementById('carbs').value



let car = {
    color: 'red',
    km: 0,
    year: 2019
}
// Copia la referencia al objetos, por lo que si se modifica uno, los cambios dse ven reflejados
// en ambos objetos.
let newCar = new car

//Copia el objeto, por lo que si se realizan cambios son excluyentes al objeto original
let newCar2 = Object.assign({}, car)