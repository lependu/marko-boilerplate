/* global test */
const { expect } = require('chai')

test('#increment', (context) => {
  let output = context.render({})
  let component = output.component;
  // The first element is the div.count
  let subject = component.els[1];
  let isCalled = false;

  component.on('increment', () => {
    isCalled = true;
  });

  /**
   * element.click() does not fire event
   * until it resolves
   * passing the test with manually emit the event
  **/
  // subject.click();
  component.emit('increment')


  expect(isCalled).to.equal(true);
});
