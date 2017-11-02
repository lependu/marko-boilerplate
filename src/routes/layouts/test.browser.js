/* global test */
const { expect } = require('chai')

test('renders {@title,@content}', (context) => {

  let { component } = context
  let subject = component.renderToString({
    params: { name: 'marko' }
  })

  expect(subject)
    .to.contain('<title>Layouts</title>')
  expect(subject)
    .to.contain('<h2>Layouts</h2')
})
