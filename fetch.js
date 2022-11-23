// datos falsos que un backend puede consumir 
// se llama jsonplaceholder
async function loadData() {
    try{
        // throw new Error('error inesperado')
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data[0]);
    } catch (error) { 
        console.log(error)
    }
    // .then(res => res.json())
    // .then(data => console.log(data))
}

loadData()

// todo funciona mientras en el package.json se encuentre type: 'module'
// porque usa metodos o herramientas que se usan en javascript
// top-level-away
try{
    // throw new Error('error inesperado')
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await res.json()
console.log(data[1]);
} catch (error) { 
    console.log(error)
}
// mismo procedimiento pero sin colocarla dentro de una funcion

  