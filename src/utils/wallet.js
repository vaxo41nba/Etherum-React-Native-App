import axios from 'axios';

export const createMnemonicFromPassword = password => axios
  .post('https://fally-app-backend.herokuapp.com/createMnemonic', {
    password,
  })
  .then(res => res.data)
  .catch(err => err);

export const createAccount = (mnemonic, password) => axios
  .post('https://fally-app-backend.herokuapp.com/createAccount', {
    mnemonic,
    password,
  })
  .then(res => res.data)
  .catch(err => err);

export const getBalance = (address, network) => axios
  .post('https://fally-app-backend.herokuapp.com/getBalance', {
    address,
    network,
  })
  .then(res => res.data)
  .catch(err => err);

export const sendEthereum = (from, to, value, gasPrice, network) => axios
  .post('https://fally-app-backend.herokuapp.com/sendEth', {
    from,
    to,
    value,
    gasPrice,
    network,
  })
  .then(res => res.data)
  .catch(err => err);

export const sendToken = (from, to, tokenInfo, value, gasPrice, network) => axios
  .post('https://fally-app-backend.herokuapp.com/sendToken', {
    from,
    to,
    value,
    gasPrice,
    network,
  })
  .then(res => res.data)
  .catch(err => err);

export const importWalletKey = privKey => axios
  .post('https://fally-app-backend.herokuapp.com/import/key', {
    privKey,
    PRIVATE_RPC: 'http://3.236.143.194:8502',
  })
  .then(res => res.data)
  .catch(err => err);

export const importWalletTextJSON = (mnemonic, password) => axios
  .post('https://fally-app-backend.herokuapp.com/import/textJson', {
    mnemonic,
    password,
  })
  .then(res => res.data)
  .catch(err => err);
