//
//
// class LocalStore {
//   constructor(masterKey) {
//     this.masterKey = masterKey;
//   }
//
//   get(key) {
//     const encryptor = new Encryptor(this.masterKey);
//     const encrypted = localStorage.getItem(key);
//     return encryptor.decrypt(encrypted);
//   }
//
//   set(key, value) {
//     const encryptor = new Encryptor(this.masterKey);
//     localStorage.setItem(key, encryptor.encrypt(value));
//   }
//
//   getPlain(key) {
//     return localStorage.getItem(key);
//   }
//
//   setPlain(key, value) {
//     localStorage.setItem(key, value);
//   }
//
//   getDecoded(key) {
//     let data = localStorage.getItem(key);
//     if (!data) {
//       return null;
//     } else {
//       let buff = new Buffer(data, 'base64');
//       return buff.toString('ascii');
//     }
//   }
//
//   setEncoded(key, value) {
//     if (!value) {
//       localStorage.setItem(key, '');
//     } else {
//       let buff = new Buffer(value);
//       localStorage.setItem(key, buff.toString('base64'));
//     }
//   }
// }
//
// export default LocalStore
