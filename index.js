module.exports = prettierBytes

function prettierBytes (b) {
  var pretty = prettyBytes(b)

  var ps = pretty.split(/\.| /)
  // If there is more than one digit to the left of the decimal, chop off the
  // fractional part.
  if (ps.length > 2 && ps[0].replace('-', '').length > 1) {
    return ps[0] + ' ' + ps[2]
  }

  return ps[0] + '.' + ps[1] + ' ' + ps[2]
}

function prettyBytes (num) {
  if (typeof num !== 'number' || Number.isNaN(num)) {
    throw new TypeError('Expected a number, got ' + typeof num)
  }

  var neg = num < 0
  var units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (neg) {
    num = -num
  }

  if (num < 1) {
    return (neg ? '-' : '') + num + ' B'
  }

  var exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1)
  num = Number((num / Math.pow(1000, exponent)).toFixed(1))
  var unit = units[exponent]

  return (neg ? '-' : '') + num + ' ' + unit
}
