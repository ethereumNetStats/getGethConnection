# About
This package is  just only a selector of preset addresses of the [Geth](https://github.com/ethereum/go-ethereum) using [web3.js](https://github.com/ChainSafe/web3.js).

# Usage
Prepare a `.env` file like below(see `.envSample`) according to your development environment using the Geth and the web3.js.  
```shell
GETH_VPN_HTTP_API_ADDRESS=http://171.1.1.1:8545
GETH_VPN_SOCKET_API_ADDRESS=ws://171.1.1.1:8546
GETH_LAN_HTTP_API_ADDRESS=http://192.168.1.1:8545
GETH_LAN_SOCKET_API_ADDRESS=ws://192.168.1.1:8546
GETH_DOCKER_HTTP_API_ADDRESS=http://171.0.0.1:8545
GETH_DOCKER_SOCKET_API_ADDRESS=ws://171.0.0.1:8546
```
And use the package like below.
```javascript
import {gethVpnHttpClient, gethVpnSocketClient, gethHttpClient, gethSocketClient} from "@pierogi.dev/get_geth_connections";

//Get a block information from a http api of the Geth.
let blockInfo = gethHttpClient.getBlock('15000000');

//Get a new block information from a socket api of the Geth via vpn.
gethVpnSocketClient.subscribe('newBlockHeaders', (error: Error, result: T) => {
    console.log(result);
});
```
# Note
This is just a package for my personal use.
However, if you use a LAN and a VPN to access to your Geth node, this may make a little help.
