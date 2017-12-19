import { file, parse } from './globals';

function component() {
  var element = document.createElement('div');

  element.innerHTML = file;

  parse();

  return element;
}

document.body.appendChild(component());
