# Web3-Login-Widget-SDK

Web3-Login-Widget-SDK is a lightweight NPM package that enables developers to integrate multiple wallet connections into their dApps. With this package, users can seamlessly connect their favorite wallets, including Metamask, Coinbase, and more, to interact with various blockchain-based applications.

## Features
- Support for multiple wallet connections, including Metamask, Coinbase, and others
- Easy to use API for connecting and managing wallets
- Integration with popular dApps on various blockchains

## Installation
To install Web3-Login-Widget-SDK, simply run the following command in your terminal:

```
npm install Web3-Login-Widget-SDK
```

## Usage

### 1. To use Multi-Wallet Connect in your project,  simply import the package and create a new instance:

```
import {getUserAdress, wallletButton} from 'Web3-Login-Widget-SDK';
```

### 2. use WalletButton inside App.js
```
<walletButton/>
```

### 3. call getUserAddress to get address
```
getUserAdress();
```

### 4. your App.js going to look like this 

```
import react, {useEffect, useState} from "react";
import {getUserAdress, wallletButton} from 'Web3-Login-Widget-SDK';

function App() {
  const [address, setAddress] = useState();

  useEffect(() => {
    walletAddress = getUserAdress();
  }, [])

  return (
    <walletButton/>
  )
}
```

## Supported Wallets
Web3-Login-Widget-SDK supports the following wallets:

### - Metamask
### - Coinbase Wallet

## Contributing
Contributions to Multi-Wallet Connect are welcome. To contribute, please follow these steps:

 - Fork the repository.
 - Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your forked repository.
- Create a pull request from your forked repository to the original repository.

## License
Multi-Wallet Connect is licensed under the MIT license.



