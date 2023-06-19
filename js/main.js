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


const item = document.querySelectorAll('.item');
const itemTitle = document.querySelectorAll('.item__title');
const propsLists = document.querySelectorAll('.props__list')




itemTitle[3].after(propsLists[2]);
itemTitle[1].after(propsLists[4]);

////////////////////////////

itemTitle[3].before(itemTitle[4]);
itemTitle[0].before(itemTitle[3]);
propsLists[5].before(itemTitle[0]);

document.querySelectorAll('.item_four .props__item.props__item_four')[2].
  after(document.querySelector('.item_two .props__item.props__item_four'))
document.querySelectorAll('.item_two .props__item.props__item_two')[7].
  after(document.querySelector('.item_six .props__item.props__item_two'))
document.querySelectorAll('.item_two .props__item.props__item_two')[8].
  after(document.querySelector('.item_six .props__item.props__item_two'))



itemTitle[1].innerHTML = "This и прототипы объектов";

////////// тут не получается правильно, удаляется отсут между li и заголовком
// const newH2 = document.createElement('h2');
// const newContent = document.createTextNode('This и прототипы объектов\n ')
// newH2.appendChild(newContent);

// console.log(itemTitle[1])
// itemTitle[1].before(newH2);
// itemTitle[1].replaceWith(' ');


