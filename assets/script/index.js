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

// function

function getInfo() {
  let shape = shapes.value;
  let color = colors.value;
  
  console.log(`shape: ${shape} | color: ${color}`)
}

function createShape() {
  const div = document.createElement('div');
  
  let shape = shapes.value;
  let color = colors.value;
  
  container.appendChild(div).classList.add(shape);
  div.style.backgroundColor = color;
  
  div.addEventListener('click', () => {
    getInfo();
  });
}

// addEventListener

create.addEventListener('click', () => {
  let shape = shapes.value;
  let color = colors.value;
  
  const object = new Shape(shape, color);
  const array = [];
  
  array.push(object);
  
  createShape();
});