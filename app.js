let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Eggs with salad',
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'Chicken Wings',
        image: '2.PNG',
        price: 12000
    },
    {
        id: 3,
        name: 'Smoked chicken',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'lentil',
        image: '4.PNG',
        price: 1230
    },
    {
        id: 5,
        name: 'Salad',
        image: '5.PNG',
        price: 1200
    },
    {
        id: 6,
        name: 'Pizza',
        image: '6.PNG',
        price: 125000
    },

    {
        id: 7,
        name: 'Fish with Lenti Puree',
        image: '22.PNG',
        price: 130000
    }  ,
    
    {
        id: 8,
        name: 'Grilled chicken with vegetables',
        image: '23.PNG',
        price: 135000
    }  , 
    
  
    
    {
        id: 9,
        name: 'Smoked staek with vegetables',
        image: '25.PNG',
        price: 140000
    }, 
    
    {
        id: 10,
        name: 'Griled steak with vegetables',
        image: '26.PNG',
        price: 150000
    },
    {
        id:11,
        name: 'Fried Fish with orange sauce',
        image: '24.PNG',
        price: 130200
    }  ,
    {
        id: 12,
        name: 'Grilld fish',
        image: '15.PNG',
        price: 170000
    }  
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
            
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}