/*
 Добавление обьекстов в карточку, удаление, очистка, подсчет всех продкутов
 
*/

const cart = {
    items: [],
    getItem() {
        return this.items;
    },
    add(product) {
        console.table(this.items);

        for (const item of this.items) {

            if (item.name === product.name) {
              item.quantity += 1;
              return;   
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;

        for (let i = 0; i < items.length; i += 1) {
        const {name} = items[i];

            if (productName === name) {
            console.log(`Нашли такой продукт`, productName); 
            console.log('Индекс: ', i);
            
            items.splice(i, 1);
            }
        }

    },
    clear() {
       this.items = [];
    },
    countTotalPrice() {
        const { items } = this;

        let total = 0;

        for (const {price, quantity} of items) {
            total += price * quantity; 
        }

        return total
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
}

console.log(cart.getItem());

cart.add({ name: '🍊', price: 50 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍌', price: 60 });
cart.add({ name: '🍒', price: 60 });
cart.add({ name: '🍏', price: 110 });
cart.add({ name: '🍏', price: 110 });
cart.add({ name: '🍏', price: 110 });


console.table(cart.getItem());

console.log('Totsl: ', cart.countTotalPrice());

cart.remove('🍒');
console.table(cart.getItem());

cart.clear();
console.log(cart.getItem());

console.log('Totsl: ', cart.countTotalPrice());