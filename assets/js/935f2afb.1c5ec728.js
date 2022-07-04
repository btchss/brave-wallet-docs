"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Intro","href":"/","docId":"intro"},{"type":"link","label":"Provider objects","href":"/provider-objects","docId":"provider-objects"},{"type":"link","label":"Restrictions for providers","href":"/provider-availability","docId":"provider-availability"},{"type":"link","label":"Default Wallet setting","href":"/default-wallet","docId":"default-wallet"},{"type":"category","label":"Ethereum","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/ethereum","docId":"ethereum/overview"},{"type":"link","label":"Built-in chains","href":"/ethereum/builtin-chains","docId":"ethereum/builtin-chains"},{"type":"link","label":"Custom chains","href":"/ethereum/custom-chains","docId":"ethereum/custom-chains"},{"type":"link","label":"Brave Wallet detection","href":"/ethereum/wallet-detection","docId":"ethereum/wallet-detection"},{"type":"category","label":"Use cases","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Local development environment","href":"/ethereum/use-cases/local-development-environment","docId":"ethereum/use-cases/local-development-environment"},{"type":"link","label":"Connecting your site","href":"/ethereum/use-cases/connecting-your-site","docId":"ethereum/use-cases/connecting-your-site"},{"type":"link","label":"Sending transactions","href":"/ethereum/use-cases/sending-transactions","docId":"ethereum/use-cases/sending-transactions"},{"type":"link","label":"Signing data","href":"/ethereum/use-cases/signing-data","docId":"ethereum/use-cases/signing-data"},{"type":"link","label":"Adding EVM compatible chains","href":"/ethereum/use-cases/adding-evm-compatible-chains","docId":"ethereum/use-cases/adding-evm-compatible-chains"},{"type":"link","label":"Switching to EVM compatible chains","href":"/ethereum/use-cases/switching-evm-compatible-chains","docId":"ethereum/use-cases/switching-evm-compatible-chains"},{"type":"link","label":"Adding custom tokens","href":"/ethereum/use-cases/adding-custom-tokens","docId":"ethereum/use-cases/adding-custom-tokens"}]},{"type":"category","label":"Ethereum Provider API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Methods","href":"/ethereum/provider-api/methods","docId":"ethereum/provider-api/methods"},{"type":"link","label":"Events","href":"/ethereum/provider-api/events","docId":"ethereum/provider-api/events"},{"type":"link","label":"Properties","href":"/ethereum/provider-api/properties","docId":"ethereum/provider-api/properties"},{"type":"link","label":"Errors","href":"/ethereum/provider-api/errors","docId":"ethereum/provider-api/errors"}]},{"type":"category","label":"RPC API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/ethereum/rpc-api/overview","docId":"ethereum/rpc-api/overview"},{"type":"link","label":"Methods","href":"/ethereum/rpc-api/methods","docId":"ethereum/rpc-api/methods"}]}]},{"type":"category","label":"Solana","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/solana","docId":"solana/overview"},{"type":"category","label":"Solana Provider API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Brave Wallet detection","href":"/solana/provider-api/provider-detection","docId":"solana/provider-api/provider-detection"},{"type":"link","label":"Methods","href":"/solana/provider-api/methods","docId":"solana/provider-api/methods"},{"type":"link","label":"Properties","href":"/solana/provider-api/properties","docId":"solana/provider-api/properties"},{"type":"link","label":"Events","href":"/solana/provider-api/events","docId":"solana/provider-api/events"},{"type":"link","label":"Errors","href":"/solana/provider-api/errors","docId":"solana/provider-api/errors"}]}]}]},"docs":{"default-wallet":{"id":"default-wallet","title":"Default Wallet setting","description":"We expose a setting in brave://settings/wallet to control how Brave makes the provider objects available (window.ethereum and window.braveSolana and its alias window.solana)","sidebar":"tutorialSidebar"},"ethereum/builtin-chains":{"id":"ethereum/builtin-chains","title":"Built-in chains","description":"Brave preloads the following chains by default.","sidebar":"tutorialSidebar"},"ethereum/custom-chains":{"id":"ethereum/custom-chains","title":"Custom chains","description":"<span","sidebar":"tutorialSidebar"},"ethereum/overview":{"id":"ethereum/overview","title":"Overview","description":"Brave injects a windows.ethereum provider object on secure sites in these cases.","sidebar":"tutorialSidebar"},"ethereum/provider-api/errors":{"id":"ethereum/provider-api/errors","title":"Errors","description":"Provider errors come in the form of a ProviderRpcError object:","sidebar":"tutorialSidebar"},"ethereum/provider-api/events":{"id":"ethereum/provider-api/events","title":"Events","description":"connect","sidebar":"tutorialSidebar"},"ethereum/provider-api/methods":{"id":"ethereum/provider-api/methods","title":"Methods","description":"ethereum.request","sidebar":"tutorialSidebar"},"ethereum/provider-api/properties":{"id":"ethereum/provider-api/properties","title":"Properties","description":"ethereum.selectedAddress (deprecated)","sidebar":"tutorialSidebar"},"ethereum/rpc-api/methods":{"id":"ethereum/rpc-api/methods","title":"Methods","description":"eth_sendTransaction","sidebar":"tutorialSidebar"},"ethereum/rpc-api/overview":{"id":"ethereum/rpc-api/overview","title":"Overview","description":"","sidebar":"tutorialSidebar"},"ethereum/use-cases/adding-custom-tokens":{"id":"ethereum/use-cases/adding-custom-tokens","title":"Adding custom tokens","description":"EIP-747 allows Dapps to request that a token be added.","sidebar":"tutorialSidebar"},"ethereum/use-cases/adding-evm-compatible-chains":{"id":"ethereum/use-cases/adding-evm-compatible-chains","title":"Adding EVM compatible chains","description":"Websites can request that alternate chains be added by using the wallet_addEthereumChain method.","sidebar":"tutorialSidebar"},"ethereum/use-cases/connecting-your-site":{"id":"ethereum/use-cases/connecting-your-site","title":"Connecting your site","description":"Websites can call:","sidebar":"tutorialSidebar"},"ethereum/use-cases/local-development-environment":{"id":"ethereum/use-cases/local-development-environment","title":"Local development environment","description":"With Ganache you can quickly fire up a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.","sidebar":"tutorialSidebar"},"ethereum/use-cases/sending-transactions":{"id":"ethereum/use-cases/sending-transactions","title":"Sending transactions","description":"Sites can request that a transaction be signed / sent by using the eth_sendTransaction method.","sidebar":"tutorialSidebar"},"ethereum/use-cases/signing-data":{"id":"ethereum/use-cases/signing-data","title":"Signing data","description":"Signing data can be done with:","sidebar":"tutorialSidebar"},"ethereum/use-cases/switching-evm-compatible-chains":{"id":"ethereum/use-cases/switching-evm-compatible-chains","title":"Switching to EVM compatible chains","description":"Websites can request that the browser changes to a different chain by using the wallet_switchEthereumChain method.","sidebar":"tutorialSidebar"},"ethereum/wallet-detection":{"id":"ethereum/wallet-detection","title":"Brave Wallet detection","description":"We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Intro","description":"Welcome to Brave Wallet\'s developer documentation.","sidebar":"tutorialSidebar"},"provider-availability":{"id":"provider-availability","title":"Restrictions for providers","description":"The provider objects (e.g. window.ethereum and window.braveSolana) are not provided in all contexts.","sidebar":"tutorialSidebar"},"provider-objects":{"id":"provider-objects","title":"Provider objects","description":"Dapps work by communicating with a special object named a provider object exposed to websites.","sidebar":"tutorialSidebar"},"solana/overview":{"id":"solana/overview","title":"Overview","description":"Brave creates Ed25519 keypairs following","sidebar":"tutorialSidebar"},"solana/provider-api/errors":{"id":"solana/provider-api/errors","title":"Errors","description":"Provider errors come in the form of a ProviderRpcError object:","sidebar":"tutorialSidebar"},"solana/provider-api/events":{"id":"solana/provider-api/events","title":"Events","description":"connect","sidebar":"tutorialSidebar"},"solana/provider-api/methods":{"id":"solana/provider-api/methods","title":"Methods","description":"Compatibility","sidebar":"tutorialSidebar"},"solana/provider-api/properties":{"id":"solana/provider-api/properties","title":"Properties","description":"Compatibility","sidebar":"tutorialSidebar"},"solana/provider-api/provider-detection":{"id":"solana/provider-api/provider-detection","title":"Brave Wallet detection","description":"Compatability with Phantom","sidebar":"tutorialSidebar"}}}')}}]);