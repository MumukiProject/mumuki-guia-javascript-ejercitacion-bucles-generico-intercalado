it("Si hacemos capitalizarPalabras('Esto es un título') debería retornar 'Esto Es Un Título'", function() {
  let resultado = capitalizarPalabras('Esto es un título')
  assert.deepEqual(resultado, 'Esto Es Un Título',`capitalizarPalabras('Esto es un título') debería retornar 'Esto Es Un Título' pero fue ${resultado}`);
})

it("Si hacemos capitalizarPalabras('había una vez') debería retornar 'Había Una Vez'", function() {
  let resultado = capitalizarPalabras('había una vez')
  assert.deepEqual(resultado, 'Había Una Vez',`capitalizarPalabras('había una vez') debería retornar 'Había Una Vez' pero fue ${resultado}`);
})