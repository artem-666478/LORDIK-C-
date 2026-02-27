/*Задача 1:класс «Пользователь»
class User{
    constructor(name){
        this.name;
    }
    sayHi(){
        console.log(`Привет,меня зовут ${this.name}`)
    }
}

const user1=new User("Alina");
const user2=new User ("Ivan");

user1.sayHi();
user2.sayHi();
*/

/*Задача 2: Счетчик с состоянием
class Counter{
    constructor() {
        this.count = 0;
    }

    increase(){
        this.count  += 1;
    }
    decrease(){
        this.count -= 1;
    }
    getCurrent(){
        return this.count;
    }
}

const counter = new Counter();
counter increase();
counter increase();
counter increase();
counter decrease();
console.log(counter.getCurrent());
*/

/*Задача 3: Наследование «Животные»

class Animal{
    constructor(name){
        this.name=name;
    }

    speak(){
        console.log("животное издаёт звук");

    }
}

class Dog extends Animal{
    speak(){
        console.log("Гав!");
    }
}

const Dog=new Dog("Бобик");
Dog.speak();
*/

/*Задача 4: «Прямоугольник»
class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    get area(){
        return this.width*this.height;
    }

    get perimeter(){
        return 2*(this.width+this.height)
    }
}

const Rectangle = new rectangle(25,55);
console.log(React.area);
console.log(rect.perimeter);
*/

/*Задача 5: Статический метод «Математика»

class MathHelper{
    static add(a,b){
        return a+b;
    }

    static multiply(a,b){
        return a*b;
    }
}

console.log(MathHelper.add(2,5));
*/

/*Задача 6: «Кошелек»

class Wallet{
    #balance;

    constructor(initialbalance){
        this.#balance= initialbalance;
    }

    deposit(amount){
        this.#balance+=amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const wallet=new Wallet(1231);
wallet.deposit (10);
console.log(wallet.getBalance());
*/

/*Задача 7: «Товар»
Создайте класс Product со свойством price.
Реализуйте сеттер price, который принимает новое значение.
Логика: Если цена меньше 0, сеттер должен игнорировать изменение или устанавливать 0. Если цена больше 0 — записывать её.
Создайте товар, попробуйте установить цену -100, затем выведите цену (должна быть 0 или старая).
class Product{
    constructor(price){
        this._price=price;
    }

    set price(value){
        if (value<0){
            this._price=0;
        }
        else{
            this._price;
        }
    }
}
const product = new Product(50);
product.price=-100;
console.log(product.price)
*/

/*Задача 8: «Библиотека»
class Book {
    constructor(title) {
        this.title = title;
        this.isRead = false;
    }

    markAsRead() {
        this.isRead = true;
    }
}

const book1 = new Book("Книга 1");
const book2 = new Book("Книга 2");
const book3 = new Book("Книга 3");

book2.markAsRead();

console.log(book1.isRead); // false
console.log(book2.isRead); // true
console.log(book3.isRead); // false

*/

/*Задача 9: «Заказ»
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const order = new Order();
order.addItem(new Item("Товар 1", 100));
order.addItem(new Item("Товар 2", 200));
console.log(order.getTotal()); // 300

*/

/*Задача 10: Мини-проект «Список задач» 
class TodoList {
    #tasks;

    constructor() {
        this.#tasks = [];
    }

    addTask(text) {
        this.#tasks.push(text);
    }

    removeTask(index) {
        if (index >= 0 && index < this.#tasks.length) {
            this.#tasks.splice(index, 1);
        }
    }

    listTasks() {
        this.#tasks.forEach((task, index) => {
                        console.log(${index + 1}: ${task});
        });
    }
}

const todoList = new TodoList();
todoList.addTask("Задача 1");
todoList.addTask("Задача 2");
todoList.addTask("Задача 3");
todoList.removeTask(1);
todoList.listTasks(); // Выводит задачи с номерами
*/
