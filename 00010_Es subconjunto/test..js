it("Si hacemos esSubconjunto([1], [1, 2, 3]) debería retornar true", function() {
  let resultado = esSubconjunto([1], [1, 2, 3])
  assert.equal(resultado, true,`esSubconjunto([1], [1, 2, 3]) debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esSubconjunto([1, 2, 3], [1, 2]) debería retornar false", function() {
  let resultado = esSubconjunto([1, 2, 3], [1, 2])
  assert.equal(resultado, false,`esSubconjunto([1, 2, 3], [1, 2]) debería retornar false pero fue ${resultado}`);
})