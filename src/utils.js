export function generateGrid(rows, columns) {
  let grid = [[], [], [], [], [], [], [], [], [], []];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      grid[i][j] = '';
    }
  }

  return grid;
}
