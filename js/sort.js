function sort(arr) {
    arr.sort((a, b) => a.amount - b.amount)
    return arr;
}

module.exports = sort
