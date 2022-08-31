function fixDecimals(stat) {
  // Percentage stats require toFixed(3) and per game stats require toFixed(1)
  if (stat > 1) {
    return stat.toFixed(1);
  } else {
    return stat.toFixed(3).replace('0', '');
  }
}

export default fixDecimals;
