{/* <input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser();  */}

// showUser(age, 'Горький', 'Максим');

class Options {
  
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  createDiv() {
    let div = document.createElement('div');
    div.textContent = 'Hello World';
    document.body.appendChild(div);
    const param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
    div.style.cssText = param;
  }
}

const item = new Options(300, 350, 'red', 18, 'center');
item.createDiv();