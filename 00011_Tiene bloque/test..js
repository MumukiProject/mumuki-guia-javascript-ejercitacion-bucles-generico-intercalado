it("Si hacemos tieneBloque([1, 2, 3, 3, 3, 8]) debería retornar true", function() {
  let resultado = tieneBloque([1, 2, 3, 3, 3, 8])
  assert.equal(resultado, true,`tieneBloque([1, 2, 3, 3, 3, 8]) debería retornar true pero fue ${resultado}`);
})

it("Si hacemos tieneBloque([1, 2, 2, 3, 3, 4]) debería retornar false", function() {
  let resultado = tieneBloque([1, 2, 2, 3, 3, 4])
  assert.equal(resultado, false,`tieneBloque([1, 2, 2, 3, 3, 4]) debería retornar false pero fue ${resultado}`);
})