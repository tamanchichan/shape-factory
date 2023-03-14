// --blue: #09f;
// --green: #9f0;
// --orange: #f90;
// --pink: #f09;
// --purple: #90f;

'use strict';

const create = document.querySelector('.button-create');
const container = document.querySelector('.grid');
const shapes = document.querySelector('#shapes');
const colors = document.querySelector('#colors')

class Shape {
  #name;
  #color;
  
  constructor(name, color) {
    this.#name = name;
    this.#color = color;
  }
  
  set name(shape) {this.#name = shape;}
  get name() {return this.#name};
  
  set color(value) {this.#color = value;}
  get color() {return this.#color;}
}

let shape = shapes.value;
let color = colors.value;

const object = new Shape(shape, color);
const array = [];

function getInfo() {
  let shape = shapes.value;
  let color = colors.value;
  
  for (let i = 0; i < array.length; i++) {
    console.log(`index: ${i} | shape: ${shape} | color: ${color}`);
  }
}

function createShape() {
  const div = document.createElement('div');
  
  let shape = shapes.value;
  let color = colors.value;
  
  container.appendChild(div).classList.add(shape);
  div.style.backgroundColor = color;
  div.style.cursor = 'pointer';
  
  div.addEventListener('click', () => {
    getInfo();
  });
}

create.addEventListener('click', () => {
  array.push(object);
  createShape();
});