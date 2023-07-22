let cart = [
    {id:1, productName:"telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"bardak", quantity:2, unitPrice:30},
    {id:3, productName:"kalem", quantity:4, unitPrice:20},
    {id:4, productName:"şarj cihazı", quantity:5, unitPrice:100},
    {id:5, productName:"kitap", quantity:6, unitPrice:30},
    {id:6, productName:"pot", quantity:2, unitPrice:30},
    {id:7, productName:"araba", quantity:1, unitPrice:1000000},
]

//map
cart.map(product =>{
    console.log(product.productName+ " : "
    + product.unitPrice * product.quantity)
})

//reduce
let total = cart.reduce((acc, product)=>acc+product.unitPrice*product.quantity,0)
console.log(total)


//filter
let quantityOver2 = cart.filter(product => product.quantity>2 )

console.log(quantityOver2)



function addToCart(sepet) {
    sepet.push({id:8, productName:"monitör", quantity:1, unitPrice:5000})
}

addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
    
}

sayiTopla(sayi)
console.log(sayi)
