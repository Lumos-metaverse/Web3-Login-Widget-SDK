import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { configureChains, createClient } from "wagmi";
import { arbitrum, mainnet, polygon, goerli } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon, goerli];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "b5baa59854e415259655029ca4724670" }),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "b5baa59854e415259655029ca4724670",
    version: "1", 
    appName: "web3Modal",
    chains,
  }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);