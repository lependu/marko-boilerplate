/* global test */
const { expect } = require('chai')

/**
 * This test will fail
 */
test('#increment', (context) => {
  let output = context.render({})
  let component = output.component;
  let subject = component.els[1];
  let isCalled = false;

  component.on('increment', () => {
    isCalled = true;
  });

  // The first element is the div.count
  subject.click();

  expect(isCalled).to.equal(true);
});
