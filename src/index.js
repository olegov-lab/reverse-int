module.exports = function reverse (n) {
    let revN;

    if (n < 0) {
    n = -n;
    revN = n.toString();
    revN = revN.split('');
    revN = revN.reverse().join('');
    return Number(revN);
  } else if(n > 0) {
    revN = n.toString();
    revN = revN.split('');
    revN = revN.reverse().join('');
    return Number(revN);
  }
  }

