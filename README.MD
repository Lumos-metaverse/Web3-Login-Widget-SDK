# Web3-Login-Widget-SDK

react-web3-wallet-widget is a lightweight NPM package that enables developers to integrate multiple wallet connections into their dApps. With this package, users can seamlessly connect their favorite wallets, including Metamask, Coinbase, and more, to interact with various blockchain-based applications.

## Features
- Support for multiple wallet connections, including Metamask, Coinbase, and others
- Easy to use API for connecting and managing wallets
- Integration with popular dApps on various blockchains

## Installation
To install react-web3-wallet-widget, simply run the following command in your terminal:

```
npm install react-web3-wallet-widget
```

## Usage

### 1. To use Multi-Wallet Connect in your project,  simply import the package and create a new instance:

```
import {getUserAdress, wallletButton} from 'Web3-Login-Widget-SDK';
```

### 2. use WalletButton inside App.js
```
<Button/>
```

### 3. your App.js going to look like this 

```
import react, {useEffect, useState} from "react";
import {getUserAdress, wallletButton} from 'Web3-Login-Widget-SDK';

function App() {
  return (
    <Button/>
  )
}
```

## Supported Wallets
react-web3-wallet-widget supports the following wallets:

### - Metamask
### - Coinbase Wallet

## Contributing
To contribute, please refer to contribute folder.

## License
Multi-Wallet Connect is licensed under the MIT license.



