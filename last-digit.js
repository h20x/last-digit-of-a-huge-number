function lastDigit(a) {
  if (0 === a.length) {
    return 1;
  }

  let i;

  while (0 < (i = a.lastIndexOf(0))) {
    a.length = i;
    a[a.length - 1] = 1;
  }

  const b = a[0] % 10;

  if (1 === a.length) {
    return b;
  }

  let r = a[1] % 4;

  if (2 === r && 1 < a[2]) {
    r = 0;
  }

  if (3 === r && 0 === lastDigit(a.slice(2)) % 2) {
    r = 1;
  }

  return b ** (r || 4) % 10;
}

module.exports = { lastDigit };
