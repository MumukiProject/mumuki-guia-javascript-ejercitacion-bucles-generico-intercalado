it("Si hacemos sumarImparesHasta(5) debería retornar 9", function() {
  let resultado = sumarImparesHasta(5)
  assert.equal(resultado, 9,`sumarImparesHasta(5) debería retornar 9 pero fue ${resultado}`);
})

it("Si hacemos sumarImparesHasta(13) debería retornar 49", function() {
  let resultado = sumarImparesHasta(13)
  assert.equal(resultado, 49,`sumarImparesHasta(13) debería retornar 49 pero fue ${resultado}`);
})

it("Si hacemos sumarImparesHasta(47) debería retornar 576", function() {
  let resultado = sumarImparesHasta(47)
  assert.equal(resultado, 576,`sumarImparesHasta(47) debería retornar 576 pero fue ${resultado}`);
})