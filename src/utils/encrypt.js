// import crypto from 'crypto';
//
// const algorithm = 'aes-256-ctr';
//
// class Encryptor {
//   constructor(key) {
//     this.key = key;
//   }
//
//   encrypt(text) {
//     var cipher = crypto.createCipher(algorithm, this.key);
//     var crypted = cipher.update(text, 'utf8', 'hex');
//     crypted += cipher.final('hex');
//     return crypted;
//   }
//
//   decrypt(text) {
//     var decipher = crypto.createDecipher(algorithm, this.key);
//     var dec = decipher.update(text, 'hex', 'utf8');
//     dec += decipher.final('utf8');
//     return dec;
//   }
// }
//
// export default Encryptor