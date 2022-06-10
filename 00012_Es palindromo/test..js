it("Si hacemos esPalindromo('ala') debería retornar true", function() {
  let resultado = esPalindromo('ala')
  assert.deepEqual(resultado, true,`esPalindromo('ala') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esPalindromo('lovelace') debería retornar false", function() {
  let resultado = esPalindromo('lovelace')
  assert.deepEqual(resultado, false,`esPalindromo('lovelace') debería retornar false pero fue ${resultado}`);
})