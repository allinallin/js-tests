/**
 * Global setup of our test object's dependencies
 */
console.log('global setup')
global.CONSTANTS = {
    first: 4,
    second: 3
}
global.AnotherThing = require('../app/anotherThing')

/**
 * Get scripts we want to tests
 */
var Thing = require('../app/thing')

/**
 * Global teardown
 * Global variables will persist and affect
 * subsequent tests - don't want to do that
 */
after(function() {
    console.log('global teardown')
    delete global.CONSTANTS
    delete global.AnotherThing
})

/**
 * The tests!
 */
describe('Thing', function() {
    it('adds the constants', function() {
        var sum = Thing.addConstants()
        expect(sum).to.equal(7)
    })

    it('squares the number 2', function() {
        var squared = Thing.squareTwo()
        expect(squared).to.equal(4)
    })
});

