var test = require('tape')

var prettierBytes = require('../')

var testData = [
  [2335, '2.3 kB'],
  [23552, '23 kB'],
  [235520, '235 kB'],
  [2355520, '2.3 MB'],
  [23555520, '23 MB'],
  [235555520, '235 MB'],
  [2355555520, '2.3 GB'],
  [23555555520, '23 GB'],
  [235556555520, '235 GB'],
  [2355556655520, '2.3 TB'],
  [23555566655520, '23 TB'],
  [235555566665520, '235 TB']
]

test('pretty bytes', function (t) {
  testData.forEach(function (data) {
    t.equals(prettierBytes(data[0]), data[1], 'bytes: ' + data[0] + ' -> ' + data[1])
  })

  t.end()
})
