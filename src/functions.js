function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantitiy, unitPrice) {

    
}
addToCart2("elma",5,10)
addToCart2("armut",2,20)
addToCart2("limon",3,15)


let product1 = {productName:"elma", unitPrice:10, quantitiy:5}
function addToCart3(product) {
    console.log("product : "+ product.productName)
    console.log("quantity : "+ product.quantitiy)
    console.log("price : "+ product.unitPrice)


}


addToCart3(product1)

let product2 = {productName:"elma", unitPrice:10, quantitiy:5}
let product3 = {productName:"elma", unitPrice:10, quantitiy:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)
 
function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"elma", unitPrice:10, quantitiy:5},
    {productName:"armut", unitPrice:10, quantitiy:5},
    {productName:"karpuz", unitPrice:10, quantitiy:5}
]

addToCart4(products)

function add(bisey,...numbers) { // rest operatörü
    let total = 0
    for (let index = 0; index < numbers.length; index++) {
        total = total + numbers[index]
        
    }
    console.log(total)
    console.log(bisey)
}


add(20,30,40)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,500,40,600,70]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,Marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name: "iç anadolu", population : "20M"},
    {name: "Marmara", population : "30M"},
    {name: "karadeniz", population : "15M"},

    [
        ["Ankara", "Konya"],
        ["istanbul", "bursa"],
        ["trabzon", "sinop"],
    ]

]

//console.log(icAnadolu.name)
//console.log(Marmara.population)
//console.log(karadeniz)
console.log(icAnadoluSehirleri)

let newProcuctName, newUnitPrice, newQuantity
({productName:newProcuctName, unitPrice:newUnitPrice, quantitiy:newQuantity} 
= {productName:"elma", unitPrice:10, quantitiy:5})

console.log(newProcuctName)
console.log(newUnitPrice)
console.log(newQuantity)


