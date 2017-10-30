/* global test */
const { expect } = require('chai')

test('renders @input.params.name', (context) => {

  let { component } = context
  let subject = component.renderToString({
    params: { name: 'marko' }
  })

  expect(subject)
    .to.contain('<strong>marko!</strong>')
})
