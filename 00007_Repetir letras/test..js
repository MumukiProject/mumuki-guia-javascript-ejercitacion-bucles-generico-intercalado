it("Si hacemos repetirLetras('hola', 2) debería retornar hhoollaa", function() {
  let resultado = repetirLetras('hola', 2)
  assert.deepEqual(resultado, 'hhoollaa',`repetirLetras('hola', 2) debería retornar 'hhoollaa' pero fue ${resultado}`);
})

it("Si hacemos repetirLetras('ave', 3) debería retornar aaavvveee", function() {
  let resultado = repetirLetras('ave', 3)
  assert.deepEqual(resultado, 'aaavvveee',`repetirLetras('ave', 3) debería retornar 'aaavvveee' pero fue ${resultado}`);
})