export default (() => new Array(300).fill(1).map((_, i) => ({
    amount: (i + 1) * 5000,
    donator: 'Donator ' + +(i + 1)
})))()