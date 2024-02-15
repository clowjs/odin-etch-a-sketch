// const container = document.getElementsByClassName('container');

// for (let i = 0; i < 16; i++) {
//   const row = document.createElement('div');
//   row.classList.add('row');

//   for (let j = 0; j < 16; j++) {
//     const square = document.createElement('div');
//     square.classList.add('square');
//     square.id = `${i + 1}x${j + 1}`;
//     row.appendChild(square);
//   }

//   container[0].appendChild(row);
// }

const btnCreateGrid = document.getElementById('btn-create-grid');
btnCreateGrid.addEventListener('click', createGrid);

function createGrid() {
  const container = document.getElementsByClassName('container');

  if (container[0].hasChildNodes()) {
    while (container[0].firstChild) {
      container[0].removeChild(container[0].firstChild);
    }
  }

  let gridSize = 0;
  
  while (gridSize < 1 || gridSize > 100) {
    gridSize = prompt('Enter a number between 1 and 100');
  }

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.id = `${i + 1}x${j + 1}`;
      square.style.opacity = 1;

      square.addEventListener('mouseover', (e) => {
        const opacity = e.target.style.opacity;

        if (opacity > 0) {
          e.target.style.opacity = opacity - 0.1;
        }
      });

      row.appendChild(square);
    }

    container[0].appendChild(row);
  }
}