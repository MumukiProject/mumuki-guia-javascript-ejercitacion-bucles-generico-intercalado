it("Si hacemos obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) debería retornar 2", function() {
  let resultado = obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])
  assert.equal(resultado, 2,`obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12]) debería retornar 2 pero fue ${resultado}`);
})

it("Si hacemos obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) debería retornar -1", function() {
  let resultado = obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])
  assert.equal(resultado, -1,`obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]) debería retornar -1 pero fue ${resultado}`);
})