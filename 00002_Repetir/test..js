it("Si hacemos repetir('cha', 3) debería retornar ['cha', 'cha', 'cha']", function() {
  let resultado = repetir('cha', 3)
  assert.deepEqual(resultado, ['cha', 'cha', 'cha'],`repetir('cha', 3) debería retornar ['cha', 'cha', 'cha'] pero fue ${resultado}`);
})

it("Si hacemos repetir('a', 5) debería retornar ['a', 'a', 'a', 'a', 'a']", function() {
  let resultado = repetir('a', 5)
  assert.deepEqual(resultado, ['a', 'a', 'a', 'a', 'a'],`repetir('a', 5) debería retornar ['a', 'a', 'a', 'a', 'a'] pero fue ${resultado}`);
})

