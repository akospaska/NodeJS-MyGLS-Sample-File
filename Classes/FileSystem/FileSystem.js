const fs = require('fs');
const path = require('path');

class FileSystem {
  #responseDecoder(ascii) {
    return String.fromCharCode(ascii);
  }
  createPDF(response) {
    let actualTimeStamp = Date.now();
    let tempArray = [];
    response.map((a) => {
      let indexValue = this.#responseDecoder(a);
      tempArray.push(indexValue);
    });

    let finalPdfSrc = tempArray.join('');

    fs.writeFileSync(`./src/createdLabels/${actualTimeStamp}.pdf`, finalPdfSrc, 'binary');

    let generatedPdfLabel = path.join(__dirname, `../../src/createdLabels/${actualTimeStamp}.pdf`);

    fs.access(generatedPdfLabel, fs.constants.F_OK, (err) => {});
  }
}

module.exports = FileSystem;
