it("Si hacemos sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) debería retornar 8", function() {
  let resultado = sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)
  assert.equal(resultado, 8,`sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) debería retornar 8 pero fue ${resultado}`);
})

it("Si hacemos sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) debería retornar 37", function() {
  let resultado = sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)
  assert.equal(resultado, 37,`sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) debería retornar 37 pero fue ${resultado}`);
})