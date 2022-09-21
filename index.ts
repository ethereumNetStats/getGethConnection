import "dotenv/config";

import Web3 from "web3";

import type {Eth, BlockHeader, Transaction} from 'web3-eth';

//Connect geth via VPN
let gethVpnSocketClient: Eth = new Web3(`${process.env.GETH_VPN_SOCKET_API_ADDRESS}`).eth;
let gethVpnHttpClient: Eth = new Web3(`${process.env.GETH_VPN_HTTP_API_ADDRESS}`).eth;

//Connect geth via LAN
let gethSocketClient: Eth = new Web3(`${process.env.GETH_LAN_SOCKET_API_ADDRESS}`).eth;
let gethHttpClient: Eth = new Web3(`${process.env.GETH_LAN_HTTP_API_ADDRESS}`).eth;

export {gethVpnHttpClient, gethVpnSocketClient, gethHttpClient, gethSocketClient}
export type {Eth, BlockHeader, Transaction}
