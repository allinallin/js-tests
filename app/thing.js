var Thing = (function(CONSTANTS, AT) {
    function add(a, b) {
        return a + b
    }

    function addConstants() {
        return add(CONSTANTS.first, CONSTANTS.second)
    }

    function squareTwo() {
        return AT.square(2)
    }

    return {
        addConstants: addConstants,
        squareTwo: squareTwo
    }
})(CONSTANTS, AnotherThing)

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Thing
}
