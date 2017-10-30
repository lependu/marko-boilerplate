/* global test */
const { expect } = require('chai')

test('renders @input.{title,content}', (context) => {

  let { component } = context
  let subject = component.renderToString({
    title: 'alpha',
    content: 'alpha-content'
  })

  expect(subject)
    .to.contain('<title>alpha</title>')
  expect(subject)
    .to.contain('<div class="content">alpha-content</div>')
})
