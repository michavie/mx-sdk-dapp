import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest
} from 'msw';
import { setupServer } from 'msw/node';
import { testNetwork } from './accountConfig';

export const mockResponse =
  <T extends DefaultBodyType>(body: T) =>
  (
    _req: RestRequest<never, PathParams<string>>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext
  ) => {
    return res(ctx.status(200), ctx.json(body));
  };

const handlers = [
  rest.get(
    `${testNetwork.apiAddress}/dapp/config`,
    mockResponse({
      id: 'devnet',
      name: 'Devnet',
      egldLabel: 'xEGLD',
      decimals: '4',
      egldDenomination: '18',
      gasPerDataByte: '1500',
      apiTimeout: '4000',
      walletConnectDeepLink:
        'https://maiar.page.link/?apn=com.elrond.maiar.wallet&isi=1519405832&ibi=com.elrond.maiar.wallet&link=https://maiar.com/',
      walletConnectBridgeAddresses: ['https://bridge.walletconnect.org'],
      walletAddress: 'https://devnet-wallet.elrond.com',
      apiAddress: 'https://devnet-api.elrond.com',
      explorerAddress: 'http://devnet-explorer.elrond.com',
      chainId: 'D'
    })
  ),
  rest.get(
    `${testNetwork.apiAddress}/network/config`,
    mockResponse({
      data: {
        config: {
          erd_adaptivity: 'false',
          erd_chain_id: 'D',
          erd_denomination: 18,
          erd_gas_per_data_byte: 1500,
          erd_gas_price_modifier: '0.01',
          erd_hysteresis: '0.200000',
          erd_latest_tag_software_version: 'D1.3.50.0-hf01',
          erd_max_gas_per_transaction: 600000000,
          erd_meta_consensus_group_size: 58,
          erd_min_gas_limit: 50000,
          erd_min_gas_price: 1000000000,
          erd_min_transaction_version: 1,
          erd_num_metachain_nodes: 58,
          erd_num_nodes_in_shard: 58,
          erd_num_shards_without_meta: 3,
          erd_rewards_top_up_gradient_point: '2000000000000000000000000',
          erd_round_duration: 6000,
          erd_rounds_per_epoch: 1200,
          erd_shard_consensus_group_size: 21,
          erd_start_time: 1648551600,
          erd_top_up_factor: '0.500000'
        }
      },
      code: 'successful'
    })
  )
];

// This configures a request mocking server with the given request handlers.
const server = setupServer(...handlers);

export { server, rest };
