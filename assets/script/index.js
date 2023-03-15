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
const output = document.querySelector('.output');
const translate = document.querySelector('.trasnlate');

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
  
  getInfo() {
    if(this.#color === '#09f') {
      return `blue ${this.#name}`;
    } if (this.#color === '#9f0') {
      return `green ${this.#name}`;
    } if (this.#color === '#f90') {
      return `orange ${this.#name}`;
    } if (this.#color === '#f09') {
      return `pink ${this.#name}`;
    } if (this.#color === '#90f') {
      return `purple ${this.#name}`;
    }
    // return `${this.#name} ${this.#color}`
  }
}

let array = [];

create.addEventListener('click', () => {
  if (array.length < 20) {
    let shape = shapes.value;
    let color = colors.value;
    const newShape = new Shape(shape, color);
    
    array.push(newShape);
    
    function createShape() {
      let shape = shapes.value;
      let color = colors.value;
      const div = document.createElement('div');
      
      container.appendChild(div).classList.add(shape);
      div.classList.add('translate');
      div.style.backgroundColor = color;
      div.style.cursor = 'pointer';
      
      div.addEventListener('click', () => {
        output.innerText = `Unit ${array.indexOf(newShape) + 1}: ${newShape.getInfo()}`
      });
    }
    
    createShape();
  } else {
    return output.innerText = 'Cannot store more than 20 shapes'
  }
});