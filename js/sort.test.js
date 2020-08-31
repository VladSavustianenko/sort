const sort = require('./sort')

const firstTestInp = [
    { amount: 10000, quantity: 10 },
    { amount: 50000, quantity: 8 },
    { amount: 2000, quantity: 4 },
    { amount: 30000, quantity: 12 },
    { amount: 4000, quantity: 11 },
    { amount: 15000, quantity: 9 },
]
const firstTestOut = [
    { amount: 2000, quantity: 4 },
    { amount: 4000, quantity: 11 },
    { amount: 10000, quantity: 10 },
    { amount: 15000, quantity: 9 },
    { amount: 30000, quantity: 12 },
    { amount: 50000, quantity: 8 },
]

const secondTestInp = [
    { amount: 32, quantity: 1 },
    { amount: 12, quantity: 2 },
    { amount: 43, quantity: 3 },
    { amount: 45, quantity: 4 },
    { amount: 21, quantity: 5 },
    { amount: 23, quantity: 6 },
]
const secondTestOut = [
    { amount: 12, quantity: 2 },
    { amount: 21, quantity: 5 },
    { amount: 23, quantity: 6 },
    { amount: 32, quantity: 1 },
    { amount: 43, quantity: 3 },
    { amount: 45, quantity: 4 },
]

test('Orders array of sales by amount', () => {
    expect(sort(firstTestInp)).toMatchObject(firstTestOut)
})
test('Orders array of sales by amount', () => {
    expect(sort(secondTestInp)).toMatchObject(secondTestOut)
})
