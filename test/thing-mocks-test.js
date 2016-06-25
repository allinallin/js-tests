/**
 * Test for app/thing.js
 * Demo of how to use mocking
 */


/**
 * Global setup of the test object's dependencies
 *
 * We will mock the methods of AnotherThing
 * because those should be tested separately
 * (e.g. anotherThing-test.js) as their own
 * unit test
 */
global.CONSTANTS = {
    first: 4,
    second: 3
}
global.AnotherThing = {
    square: sinon.spy()
}

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
describe('Thing Mocks', function() {

    describe('squareTwo', function() {
        it('calls AnotherThing with 2', function() {
            var squared = Thing.squareTwo()
            expect(AnotherThing.square.calledWith(2)).to.be.true
        })
    })

});

