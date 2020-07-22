const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

const attrsToString = (obj = {}) => {
    const keys = Object.keys(obj)
    const attrs = []

    for (let i=0; i<keys.length; i++){
        let attr = keys[i]
        attrs.push(`${attr}="${obj[attr]}"`)
    }

    const string = attrs.join('') // convierte los elementos del array en un string

    return string
}

const tagAttrs = obj => (content = "") => 
`<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = (t) => {
    if(typeof t === 'string'){
        return tagAttrs({tag: t})
    }else {
        return tagAttrs(t)
    }
}
//const tag = t => content => `<${t}>${content}</${t}>`
const tableRowTag = tag('tr')
const tableRow = items => tableRowTag(tableCells(items))
//const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag({tag: 'td'})
const tableCells = (items = []) => items.map(tableCell).join('\n') 

const trashIcon = tag({tag: 'i', attrs: {class: 'fas fa-trash-alt'}})('-')

let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')
let btn = document.getElementById('btn')
let arr = [description, calories, carbs, protein]

let list = []

btn.addEventListener('click', function(e){
    e.preventDefault()
    if(validation2(arr) === true){
        add()
        updateTotals()
        
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


const add = () => {
    const newItem = {
        description: description.value,
        calories: parseInt(calories.value),
        carbs: parseInt(carbs.value),
        protein: parseInt(protein.value)
    }
    
    list.push(newItem)
    renderItems()
    updateTotals()
    cleanInputs()
    console.log(list)
    
}

const updateTotals = () => {


    let calories = 0, carbs = 0, protein = 0

    list.map(item => {
        calories += item.calories,
        carbs += item.carbs,
        protein += item.protein
    })

    document.querySelector('#totalCalories').textContent = calories
    document.querySelector('#totalCarbs').textContent = carbs
    document.querySelector('#totalProtein').textContent = protein
}



const cleanInputs = () => {
    description.value = ''
    calories.value = ''
    carbs.value = ''
    protein.value = ''
}

//map table add rows

const renderItems = () => {
   const items = document.querySelector('#items')
   items.innerHTML = ''

   const rows = list.map((item, index) => {
       const removeButton = tag({
           tag: 'button',
           attrs: {
               class: 'btn btn-outline-danger',
               onclick: `removeItem(${index})`
           }
       })(trashIcon)
       const { description, carbs, protein, calories } = item
       return tableRow([description, calories, carbs, protein, removeButton])
   }).join('')
   items.innerHTML = rows
}

const removeItem = (index) => {
    list.splice(index, 1)
    updateTotals()
    renderItems()
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