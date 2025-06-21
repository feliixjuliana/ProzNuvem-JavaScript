function calculadora(a, b){
    console.log(`
        ${a} + ${b} = ${a + b}
        ${a} - ${b} = ${a - b}
        ${a} * ${b} = ${a * b}
        ${a} / ${b} = ${(a / b).toFixed(2)}`)
}

calculadora(1,3)