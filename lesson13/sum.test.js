const sum = require('./sum.js')

test('add 2 + 3 equal 5', ()=>{

  expect(sum(2, 3)).toBe(5); // 2+3===5
})