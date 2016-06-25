var AnotherThing = (function() {
    function square(n) {
        return n * n
    }

    return {
        square: square
    }
})()

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = AnotherThing
}
