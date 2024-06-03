function interestCalc(amount, percentage) {
    let deci = (parseFloat(percentage) / 100)
    let calc = amount * deci
    console.log(calc)
}
interestCalc(750, "15%")