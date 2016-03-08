var prettyBytes = require('pretty-bytes')

module.exports = prettierBytes

// prettier bytes, less verbose
// str -> str
function prettierBytes (b) {
  var pretty = prettyBytes(b)

  var ps = pretty.split(/\.| /)
  // if there is more than one digit to the left of the decimal, chop off the
  // fractional part.
  if (ps.length > 2 && ps[0].replace('-', '').length > 1) {
    return ps[0] + ' ' + ps[2]
  } else {
    return ps[0] + '.' + ps[1].charAt(0) + ' ' + ps[2]
  }
}
