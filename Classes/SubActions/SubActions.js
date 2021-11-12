const crypto = require("crypto");
const sha512 = require("js-sha512");
const converter = require("hex2dec");

class SubActions {
  hashPassword(password) {
    const name = password;
    const hash = crypto.createHash("sha512").update(name).digest("hex");
    return hash;
  }
  passwordToEncryptedDecimal(password) {
    const str = sha512(password);
    let hexadecimalArray = str.match(/.{1,2}/g);
    let finalArray = [];
    hexadecimalArray.map((a) => {
      finalArray.push(Number(converter.hexToDec(a)));
    });
    return finalArray;
  }
}

module.exports = SubActions;
