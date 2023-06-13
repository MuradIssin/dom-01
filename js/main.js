// удаляем рекламу
document.querySelector('.ads').remove();

const all = document.querySelector('.items');

const one = document.querySelector('.item_one');
const two = document.querySelector('.item_two');
const three = document.querySelector('.item_three');
const four = document.querySelector('.item_four');
const five = document.querySelector('.item_five');
const six = document.querySelector('.item_six');

all.append(one, two, three, four, five, six);

// ********************************

const propsItem2 = document.querySelectorAll('.item_two .props__item');
const propsItem4 = document.querySelectorAll('.item_four .props__item');
propsItem4[2].append(propsItem2[3]);

const propsItem6 = document.querySelectorAll('.item_six .props__item');
propsItem2[8].append(propsItem6[8], propsItem6[9]);

// ********************************

const propsList3 = document.querySelector('.item_three .props__list');
const propsList5 = document.querySelector('.item_five .props__list');
const cloneItem5 = propsList5.cloneNode(true);
const cloneItem3 = propsList3.cloneNode(true);
propsList5.replaceWith(cloneItem3);
propsList3.replaceWith(cloneItem5);

// ********************************


const nameBook5 = document.querySelector('.item_five .item__title'); //Область видимости и замыкание
const nameBook2 = document.querySelector('.item_two .item__title'); //ES6 и не только
// const nameBook0 = document.querySelector('.item_three .item__title'); //Замыкания и объекты
const nameBook6 = document.querySelector('.item_six .item__title'); //Асинхронная обработка и оптимизация

const cloneBook5 = nameBook5.cloneNode(true);
const cloneBook2 = nameBook2.cloneNode(true);
// const cloneBook0 = nameBook0.cloneNode(true);
const cloneBook6 = nameBook6.cloneNode(true);

nameBook2.replaceWith(cloneBook5);
nameBook5.replaceWith(cloneBook6);
nameBook6.replaceWith(cloneBook2);


const nameBook3 = document.querySelector('.item_three .item__title'); //Замыкания и объекты
console.log(nameBook3);
// nameBook3.replaceWith(`<h2 class="item__title" > This и прототипы объектов</h2>`);
nameBook3.replaceWith(`<br> This и прототипы объектов`);
