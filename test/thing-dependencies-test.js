/**
 * Test for app/thing.js
 * Demo of how to deal with a script's
 * dependencies by way of globals
 */


/**
 * Global setup of the test object's dependencies
 */
global.CONSTANTS = {
    first: 4,
    second: 3
}
global.AnotherThing = require('../app/anotherThing')

/**
 * Get object we want to test
 */
var Thing = require('../app/thing')

/**
 * Global teardown
 * Global variables will persist and affect
 * subsequent tests - don't want to do that
 */
after(function() {
    delete global.CONSTANTS
    delete global.AnotherThing
})

/**
 * The tests!
 */
describe('Thing Dependencies', function() {

    describe('addConstants', function() {
        it('adds the constants', function() {
            var sum = Thing.addConstants()
            expect(sum).to.equal(7)
        })
    })

});

