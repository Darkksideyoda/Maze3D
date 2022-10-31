export function Generate2DArray(Dimension: number) {
  let i = 0;
  let j = 0;
  let h = 0;
  const Array2D = new Array(Dimension);
  const printList = [];

  for (i; i < Array2D.length; i++) {
    Array2D[i] = new Array(Dimension);
  }

  for (i; i < Dimension; i++) {
    for (j; j < Dimension; j++) {
      Array2D[i][j] = h++;
    }
  }

  for (i = 0; i < Dimension; i++) {
    for (j = 0; j < Dimension; j++) {
      printList.push(Array2D[i][j]);
    }
  }

  return printList;
}
