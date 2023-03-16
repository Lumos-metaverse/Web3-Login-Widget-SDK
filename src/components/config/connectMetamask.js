let address;
export const connectMetmask = async () => {
    if (typeof window.ethereum !== "undefined") {
        let provider = window.ethereum;
        if (window.ethereum.providers?.length) {
          window.ethereum.providers.forEach(async (p) => {
            if (p.isMetaMask) provider = p;
          });
        }
        await provider.request({
          method: "eth_requestAccounts",
          params: [],
        }).then(res => {
          address = res[0];
        })
    } else {
        alert("install metamask extension!!")
    }
    return address;
}