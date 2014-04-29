var Flatsheet = require('flatsheet');

var flatsheet = new Flatsheet();
flatsheet.sheet('tcuxl49owsafl-jgp5qrta', getRows);

function getRows (err, res) {
  console.log(err, res);
}