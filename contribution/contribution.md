# How to Contribute ?
Contributions to Multi-Wallet Connect are welcome. To contribute, please follow these steps:
.

## 1. Fork the repository.
## 2. Create a new branch for your feature or bug fix.
## 3. If you create a new component that needs to be exported, modify the index.js file to include the export statement.

```
export { default as HelloWorld } from './components/HelloWorld';
```

## 4. Then, to build the package, run the following command: 
```
npm update && npm run build
```

## 5. Use the playground present inside the package to test your recent build. To do so, run the following command:

```
npm run i-all
npm run dev
```

## 6. Make your changes and commit them.
## 7. Push your changes to your forked repository.
## 8.Create a pull request from your forked repository to the original repository.


By following these steps, you can help improve Multi-Wallet Connect and ensure that your contributions are properly implemented and reviewed.