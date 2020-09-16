'use strict';
/* Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект: */


/**
 *  функция Возвращает разряды числа
 * @param {number} num 
 */
function intToObj(num) {
    let res = {
        units: 0,
        tens: 0,
        hundreds: 0
    };

    if (num > 0 && num < 10) {
        res.units = units_fun(num);
    } else if (num >= 10 && num < 100) {
        res.units = units_fun(num);
        res.tens = tens_fun(num);
    } else if (num >= 100 && num < 1000) {
        res.units = units_fun(num);
        res.tens = tens_fun(num);
        res.hundreds = hundreds_fun(num);
    } else {
        alert('Вы ввели либо 0, либо число больше 999, либо не число')
    }

    console.log(res.units);
    console.log(res.tens);
    console.log(res.hundreds);
}

// возвращает единицы
function units_fun(num) {
    return num % 10;
}
// возвращает десятки
function tens_fun(num) {
    return Math.floor(num / 10 ) % 10;
}
// возвращает сотые
function hundreds_fun(num) {
    return Math.floor(num / 100); 
}

intToObj(432);
intToObj(55);
intToObj(1);
intToObj(111111);
intToObj('df');

/* 2 задание 
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/

// es5
function Product(name, price) {
    this.name = name,
    this.price = price
};

Product.prototype.make25PercentDiscount = function()  {
    this.price = this.price - (this.price * 25 / 100)
}

const product = new Product('TV', 100); // создаём объект
product.make25PercentDiscount(); // Делаем скидку


// *******************
//es6

class Product1 {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price * 25 / 100)
    }  
};

const product1 = new Product1('TV', 100); // создаём объект
product1.make25PercentDiscount(); // Делаем скидку
console.log(product1)


/* 3 задание 
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

//es5

function Post (author, text, date) {
    this.author = author,
    this.text = text, 
    this.date = date
}

Post.prototype.edit = function(new_text) {
    this.text = new_text;
}

function AttachedPost (author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

const post = new Post('Dmitriy', 'Hello', '22.01');
post.edit('World');

const attached_post = new AttachedPost('Kusov', 'How are you?', '11.10');
attached_post.makeTextHighlighted();



// *******************
// es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text; 
        this.date = date;      
    }

    edit(new_text) {
        this.text = new_text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post = new Post('Dmitriy', 'Hello', '22.01');
post.edit('World');

const attached_post = new AttachedPost('Kusov', 'How are you?', '11.10');
attached_post.makeTextHighlighted();