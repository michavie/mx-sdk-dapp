import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import { NetworkType } from 'types';
export declare function initializeProxyProvider(networkConfig?: NetworkType): ProxyNetworkProvider;
export declare function getProxyProvider(): ProxyNetworkProvider;
export declare function getAccountFromProxyProvider(address?: string): Promise<import("@elrondnetwork/erdjs-network-providers").AccountOnNetwork | null>;
export declare function getNetworkConfigFromProxyProvider(): Promise<import("@elrondnetwork/erdjs-network-providers").NetworkConfig | null>;
//# sourceMappingURL=proxyProvider.d.ts.map