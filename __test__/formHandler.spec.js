// Import the js file to test
const handleSubmit = require('../src/client/js/formHandler');

describe("Testing the submit functionality", () => {

    test("Testing that the handleSubmit function is defined and not null", () => {
         expect(handleSubmit).toBeDefined();
})});
