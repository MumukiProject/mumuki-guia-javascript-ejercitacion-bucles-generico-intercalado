> Definí una función `esSubconjunto` que tome por parámetro dos arrays, y retorne si el primero es subconjunto del segundo, es decir, si todos los valores del subconjunto están en el conjunto.
>
```javascript
ム esSubconjunto([1], [1, 2, 3])
true
ム esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])
true
ム esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])
true
ム esSubconjunto([1, 2, 3], [1, 2])
false
ム esSubconjunto([1], [2, 3, 4])
false