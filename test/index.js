var test = require('tape')

var prettierBytes = require('../')

var testData = [
  [2, '2 B'],
  [25, '25 B'],
  [235, '235 B'],
  [2335, '2.3 KB'],
  [23552, '23 KB'],
  [235520, '235 KB'],
  [2355520, '2.4 MB'],
  [23555520, '23 MB'],
  [235555520, '235 MB'],
  [2355555520, '2.4 GB'],
  [23555555520, '23 GB'],
  [235556555520, '235 GB'],
  [2355556655520, '2.4 TB'],
  [23555566655520, '23 TB'],
  [235555566665520, '235 TB']
]

test('pretty bytes', function (t) {
  testData.forEach(function (data) {
    t.equals(prettierBytes(data[0]), data[1], 'bytes: ' + data[0] + ' -> ' + data[1])
  })

  t.end()
})

test('throws on non-number', function (t) {
  t.throws(function () {
    prettierBytes('this is a string')
  })
  t.end()
})

test('throws on NaN', function (t) {
  t.throws(function () {
    prettierBytes(NaN)
  })
  t.end()
})
