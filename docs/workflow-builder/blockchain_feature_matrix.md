---
---

# Blockchain feature matrix

## Comparison chart

For various technical reasons all features are not yet supported on all testnet blockchains. Please refer to this chart for up to date info. Is something is not listed here it is operational on all blockchains. 


| Toolblox Feature         | Avalanche  | Aurora     | Ethereum   | Evmos      | Near       | Near JS | Polygon    |
|--------------------------|------------|------------|------------|------------|------------|-----------|------------|
| Cross-workflow calls     |**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|**&#10005;**|  coming     |**&#10003;**|
| 'Other flow id' attribute      |**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|**&#10005;**|  coming     |**&#10003;**|
| Invoice event            |**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|  coming     |**&#10003;**|
| 'Address' ('name, email address') attribute |**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|**&#10005;**|  coming     |**&#10003;**|
| ERC20 support             | USDTC, USDT| USDC.e, USDT, BUSD| USDC, EUROC, USDT, EURT| gUSDT, USDC.grv, gDAI|**&#10005;**| coming    | USDC, USDT|
| ERC20 support (testnet)   | USDC     | wNear     | USDC, EUROC     | coming     |**&#10005;**| coming    | jEUR, USDC| (
| NFT compatibility (ERC721, NEP171)|**&#10003;**|**&#10003;**|**&#10003;**|**&#10003;**|coming| coming   |**&#10003;**|
| Wallet                   |MetaMask    |MetaMask    |MetaMask    |MetaMask    |Web         | TBD       |MetaMask    

## Comments

### Near Protocol

The Near blockchain is supported through three implementations: Aurora, Near and Near JS. Aurora is most feature-complete.

Near JS support is currently under active development but the aim is to achieve feature parity with Aurora. At this point the non-JS variant will be dropped. It is still possible that already-deployed workflows continue working with the JS version but caution is advised.

