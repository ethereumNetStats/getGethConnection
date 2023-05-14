import "dotenv/config";

import Web3 from "web3";
import WebsocketProvider from 'web3-providers-ws'

import type {Eth, BlockHeader, Transaction} from 'web3-eth';

// ------------------------------------------------------------------
//                              LAN
// ------------------------------------------------------------------

// イーサリアムブロックチェーンとHTTP通信するAPIを取得
let gethHttpClient: Eth = new Web3(`${process.env.GETH_LAN_HTTP_API_ADDRESS}`).eth;

// Gethとのソケット通信のインスタンスを作成
// LANを介してGethとソケット通信するためのインスタンスを作成
let web3LanWs = new WebsocketProvider(
    `${process.env.GETH_LAN_SOCKET_API_ADDRESS}`,
    { reconnect: { auto: true } },
)

// イーサリアムブロックチェーンとソケット通信するAPIを取得
let gethSocketClient: Eth = new Web3(web3LanWs).eth;

// ------------------------------------------------------------------
//                              VPN
// ------------------------------------------------------------------

// イーサリアムブロックチェーンとVPNを介してHTTP通信するAPIを取得
let gethVpnHttpClient: Eth = new Web3(`${process.env.GETH_VPN_HTTP_API_ADDRESS}`).eth;

// GethとのVPN経由のソケット通信のインスタンスを作成
// VPNを介してGethとソケット通信するためのインスタンスを作成
let web3VpnWs = new WebsocketProvider(
    `${process.env.GETH_VPN_SOCKET_API_ADDRESS}`,
    { reconnect: { auto: true } },
)

// VPNを介してイーサリアムブロックチェーンとソケット通信するAPIを取得
let gethVpnSocketClient: Eth = new Web3(web3VpnWs).eth;

// ------------------------------------------------------------------
//                              Docker
// ------------------------------------------------------------------

// イーサリアムブロックチェーンとDockerネットワークを介してHTTP通信するAPIを取得
let gethDockerHttpClient: Eth = new Web3(`${process.env.GETH_DOCKER_HTTP_API_ADDRESS}`).eth;

// GethとのDockerネットワーク経由のソケット通信のインスタンスを作成
// Dockerネットワークを介してGethとソケット通信するためのインスタンスを作成
let web3DockerWs = new WebsocketProvider(
    `${process.env.GETH_DOCKER_SOCKET_API_ADDRESS}`,
    { reconnect: { auto: true } },
)

// Dockerネットワークを介してイーサリアムブロックチェーンとソケット通信するAPIを取得
let gethDockerSocketClient: Eth = new Web3(web3DockerWs).eth;

export {
    gethVpnHttpClient,
    gethVpnSocketClient,
    gethHttpClient,
    gethSocketClient,
    gethDockerHttpClient,
    gethDockerSocketClient
};

export type {Eth, BlockHeader, Transaction}
