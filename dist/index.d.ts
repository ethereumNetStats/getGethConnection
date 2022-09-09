import "dotenv/config";
import type { Eth } from 'web3-eth';
declare let gethVpnSocketClient: Eth;
declare let gethVpnHttpClient: Eth;
declare let gethSocketClient: Eth;
declare let gethHttpClient: Eth;
export { gethVpnHttpClient, gethVpnSocketClient, gethHttpClient, gethSocketClient };
