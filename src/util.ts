export function formatNumber(number: number, digits: number = 2) {
  // copied from: https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'Mrd' },
    { value: 1e12, symbol: 'B' },
    { value: 1e15, symbol: 'Brd' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return number >= item.value;
    });
  return item
    ? (number / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}

export function videoLength(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) - hours * 60;
  const secs = seconds - minutes * 60 - hours * 3600;
  const pad = (num: number) => (num < 10 ? '0' + num : num);
  return `${hours ? pad(hours) + ':' : ''}${pad(minutes)}:${pad(secs)}`;
}
