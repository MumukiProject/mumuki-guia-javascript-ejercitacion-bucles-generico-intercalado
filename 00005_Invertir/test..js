it("Si hacemos invertir([1, 2, 3])  debería retornar [3, 2, 1]", function() {
  let resultado = invertir([1, 2, 3]) 
  assert.deepEqual(resultado, [3, 2, 1],`invertir([1, 2, 3]) debería retornar [3, 2, 1] pero fue ${resultado}`);
})

it("Si hacemos invertir([5, 7, 99, 34, 54, 2, 12])  debería retornar [12, 2, 54, 34, 99, 7, 5]", function() {
  let resultado = invertir([5, 7, 99, 34, 54, 2, 12]) 
  assert.deepEqual(resultado, [12, 2, 54, 34, 99, 7, 5],`invertir([5, 7, 99, 34, 54, 2, 12]) debería retornar [12, 2, 54, 34, 99, 7, 5] pero fue ${resultado}`);
})