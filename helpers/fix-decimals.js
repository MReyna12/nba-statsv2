function fixDecimals(stat) {
  return stat.toFixed(3).replace('0', '');
}

export default fixDecimals;
