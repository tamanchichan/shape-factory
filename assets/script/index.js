// --black: #000;
// --blue: #09f;
// --green: #9f0;
// --orange: #f90;
// --pink: #f09;
// --purple: #90f;
// --red: #f00;

'use strict';

const create = document.querySelector('.button-create');
const container = document.querySelector('.grid');
const shapes = document.querySelector('#shapes');
const colors = document.querySelector('#colors')
const output = document.querySelector('.output');
const translate = document.querySelector('.trasnlate');

class Shape {
  #shape;
  #color;
  
  constructor(shape, color) {
    this.#shape = shape;
    this.#color = color;
  }
  
  set shape(value) {this.#shape = value;}
  get shape() {return this.#shape};
  
  set color(value) {this.#color = value;}
  get color() {return this.#color;}
  
  getInfo() {
    if (this.#color === '#000') {
      return `black ${this.#shape}`;
    } if(this.#color === '#09f') {
      return `blue ${this.#shape}`;
    } if (this.#color === '#9f0') {
      return `green ${this.#shape}`;
    } if (this.#color === '#f90') {
      return `orange ${this.#shape}`;
    } if (this.#color === '#f09') {
      return `pink ${this.#shape}`;
    } if (this.#color === '#90f') {
      return `purple ${this.#shape}`;
    } if (this.#color === '#f00') {
      return `red ${this.#shape}`;
    }
    // return `${this.#shape} ${this.#color}`
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