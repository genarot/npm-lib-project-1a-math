/**
 * Ensure that the values provided are numbers
 * @param {number} n1
 * @param {number} n2
 * @returns {boolean}
 */
exports.areNumbers = (n1, n2) => {
    return (typeof  n1 === 'number' && typeof n2 === 'number')
}

/**
 * Throw an error message when the values are not number
 */
exports.errorMessage = () =>{
    console.error('One of the two values provided are not number')
}

/**
 * Two numbers addition
 * @example
 *  n1 = 1, n2 = 4 = >  result 5
 * @param {number} n1 Number one of the addition
 * @param {number} n2 Number two of the addition
 * @returns {*}
 */
exports.addition = (n1, n2) => {
    return this.areNumbers(n1, n2) ? (n1 + n2) : this.errorMessage()
}

/**
 * Two numbers subtraction
 * @example
 *  n1 = 1, n2 = 4 = >  result -3
 * @param {number} n1 Number one of the subtraction
 * @param {number} n2 Number two of the subtraction
 * @returns {*}
 */
exports.subtraction = (n1, n2) => {
    return this.areNumbers(n1, n2) ? (n1 - n2) : this.errorMessage()
}

/**
 * Two numbers multiplication
 * @example
 *  n1 = 1, n2 = 4 = >  result 4
 * @param {number} n1 Number one of the multiplication
 * @param {number} n2 Number two of the multiplication
 * @returns {*}
 */
exports.multiplication = (n1, n2) => {
    return this.areNumbers(n1, n2) ? (n1 * n2) : this.errorMessage()
}

/**
 * Two numbers division
 * @example
 *  n1 = 1, n2 = 4 = >  result 0.25
 * @param {number} n1 Number one of the division
 * @param {number} n2 Number two of the division
 * @returns {number}
 */
exports.division = (n1, n2) => {
    return this.areNumbers(n1, n2) ? (n1 / n2) : this.errorMessage()
}

/**
 * Two numbers module
 * @param {number} n1
 * @param {number} n2
 * @returns {number}
 */
exports.mod = (n1, n2) => {
    return this.areNumbers(n1, n2) ? (n1 % n2) : this.errorMessage()
}
