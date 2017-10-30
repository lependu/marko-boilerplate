/* global test */
const { expect } = require('chai')

test('renders div.count', (context) => {

  let subject = context.render()

  expect(subject.$('div.count').text())
    .to.equal('0')
});

test('renders button', (context) => {

  let subject = context.render()

  expect(subject.$('button').text())
    .to.equal('Click me!')
});
