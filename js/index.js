const container = document.getElementsByClassName('container');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.id = `${i + 1}x${j + 1}`;
    container[0].appendChild(square);
  }
}