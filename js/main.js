// удаляем рекламу
document.querySelector('.ads').remove();


// console.log(document.querySelector('.item_four'))
// console.log(document.querySelector('.item_one'))
// console.log(document.querySelector('.item_two'))
// console.log(document.querySelector('.item_three'))
// console.log(document.querySelector('.item_five'))
// console.log(document.querySelector('.item_six'))

const all = document.querySelector('.items');

const one = document.querySelector('.item_one');
const two = document.querySelector('.item_two');
const three = document.querySelector('.item_three');
const four = document.querySelector('.item_four');
const five = document.querySelector('.item_five');
const six = document.querySelector('.item_six');

all.append(one, two, three, four, five, six);


const propsItem2 = document.querySelectorAll('.item_two .props__item');
const propsItem4 = document.querySelectorAll('.item_four .props__item');
propsItem4[2].append(propsItem2[3]);

const propsItem6 = document.querySelectorAll('.item_six .props__item');
propsItem2[8].append(propsItem6[8], propsItem6[9]);



// ********************************




// const propsLists3 = document.querySelectorAll('.item_three .props__list');
// const propsLists5 = document.querySelectorAll('.item_five .props__list');

// console.log(propsLists3);
// console.log(propsLists5);
// propsLists5.replace(propsLists3);

const propsItem3 = document.querySelectorAll('.item_three .props__item');
const propsItem5 = document.querySelectorAll('.item_five .props__item');
// console.log(propsItem3);
// console.log(propsItem5);

// const cloneItem5 = propsItem5.cloneNode(true);
// console.log(cloneItem5);

// propsItem5[0].append(propsItem3[0]);

// propsItem3[7].append(propsItem5[0]);
// propsItem3[7].append(propsItem5[1]);
// propsItem3[7].append(propsItem5[2]);
// propsItem3[7].append(propsItem5[3]);
// propsItem3[7].append(propsItem5[4]);
// propsItem3[7].append(propsItem5[5]);
// propsItem3[7].append(propsItem5[6]);



// propsItem5[0].append(propsItem3[1]);




const nameBook = document.querySelector('.item_five .item__title'); //Область видимости и замыкание
const nameBook2 = document.querySelector('.item_two .item__title'); //ES6 и не только
const nameBook3 = document.querySelector('.item_three .item__title'); //Замыкания и объекты
const nameBook4 = document.querySelector('.item_six .item__title'); //Асинхронная обработка и оптимизация
