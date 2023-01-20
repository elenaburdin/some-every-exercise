function allEvens(arr) {
    return arr.every(function (num) {
        if (num % 2 === 0) {
            return true
        }
        return false
    })
}