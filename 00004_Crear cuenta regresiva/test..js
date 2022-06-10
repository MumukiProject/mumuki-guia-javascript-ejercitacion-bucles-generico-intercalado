it("Si hacemos crearCuentaRegresiva(3) debería retornar [3, 2, 1, 0]", function() {
  let resultado = crearCuentaRegresiva(3)
  assert.deepEqual(resultado, [3, 2, 1, 0],`crearCuentaRegresiva(3) debería retornar [3, 2, 1, 0] pero fue ${resultado}`);
})

it("Si hacemos crearCuentaRegresiva(5) debería retornar [5, 4, 3, 2, 1, 0]", function() {
  let resultado = crearCuentaRegresiva(5)
  assert.deepEqual(resultado, [5, 4, 3, 2, 1, 0],`crearCuentaRegresiva(5) debería retornar [5, 4, 3, 2, 1, 0] pero fue ${resultado}`);
})