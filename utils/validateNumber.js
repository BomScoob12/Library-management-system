function isRateNumberValid(num){
    if(num > 5 || num < 1) {
        return false
    } else {
        return true
    }
}

module.exports = isRateNumberValid