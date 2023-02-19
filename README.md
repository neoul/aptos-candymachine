# Init

```shell
aptos init # create default profile
aptos init --assume-yes --network local --profile user1
aptos move compile --save-metadata --named-addresses candymachine=0xcc475a9ff2373a02e6819906337a4d83248f169941deabffaf98f3d305496af7
aptos move publish --named-addresses candymachine=0xcc475a9ff2373a02e6819906337a4d83248f169941deabffaf98f3d305496af7
npx ts-node packages/CLI/src/index.ts --create_candy --config config.json
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