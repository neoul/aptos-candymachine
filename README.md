# Init

```shell
aptos init # create default profile
aptos init --assume-yes --network local --profile user1
aptos move compile --save-metadata --named-addresses candymachine=0x61707c8ee9eccee51ec8dfccebd92766714f4aaffb151a9f10cf0070b14d14b2
aptos move publish --named-addresses candymachine=0x61707c8ee9eccee51ec8dfccebd92766714f4aaffb151a9f10cf0070b14d14b2
npx ts-node packages/CLI/src/index.ts --create_candy --config config.json
npx ts-node packages/CLI/src/index.ts --create_whitelist --config config.json
npx ts-node packages/CLI/src/index.ts --config config.json --mint 0x21260d382228564cccc6c985889a8d2fe816734c10a0518cdbee51bc1ce07446
```




Candy machine smart contract for Aptos Blockchain. The smart contract is available in mainnet and testnet. For detail information please go to our [docs](https://docs.mokshya.io)

Mainnet contract : 0xb9c7b4d7da344bbf03a3d4b144c2020dec1049427b96d0411024153485621185

Testnet contract : 0xb9c7b4d7da344bbf03a3d4b144c2020dec1049427b96d0411024153485621185

# Quick Installation 

```shell
yarn & cd packages/CLI & yarn & cd ../Candymachine-UI & yarn & ../../
```
# Set up candy machine 

```shell
ts-node packages/CLI/src/index.ts --create_candy 
```

# Add whitelist Users

```shell
ts-node packages/CLI/src/index.ts --create_whitelist 
```

# Mint NFT UI

* copy the resource_account from config.json file.

```shell
cd package/Candymachine-UI & yarn
```

* Add config.json resource_account to the env file in resource_account .

```shell 
npm run dev  
```