test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be X yenes", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(1);

    // Si 1 euro = 1.07 dólares y 1 euro = 156.5 yenes
    // Entonces: 1 dólar = (156.5 / 1.07) yenes
    const expected = 1 * (156.5 / 1.07);

    // Hago mi comparación (la prueba)
    expect(yenes).toBe(146.26168224299065); // 1 dólar son (156.5/1.07) yenes
})

test("One yen should be X pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(1);

    // Si 1 euro = 156.5 yenes y 1 euro = 0.87 libras
    // Entonces: 1 yen = (0.87 / 156.5) libras
    const expected = 1 * (0.87 / 156.5);

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(0.0055591054313099035); // 1 yen son (0.87/156.5) libras
})