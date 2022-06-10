it("Si hacemos removerDuplicados([1, 1, 1]) debería retornar [1]", function() {
  let resultado = removerDuplicados([1, 1, 1])
  assert.deepEqual(resultado, [1],`removerDuplicados([1, 1, 1]) debería retornar [1] pero fue ${resultado}`);
})

it("Si removerDuplicados([1, 1, 2, 2, 3, 3]) debería retornar [1, 2 ,3]", function() {
  let resultado = removerDuplicados([1, 1, 2, 2, 3, 3])
  assert.deepEqual(resultado, [1, 2 ,3],`removerDuplicados([1, 1, 2, 2, 3, 3]) debería retornar [1, 2 ,3] pero fue ${resultado}`);
})