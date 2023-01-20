import { getAccountProvider } from 'providers';
import { getSignableMessage } from 'services/signMessage';
import { getAddress } from 'utils/account/getAddress';

export interface SignMessageType {
  message: string;
  callbackRoute?: string;
}

export const signMessage = async ({
  message,
  callbackRoute
}: SignMessageType) => {
  const address = await getAddress();
  const provider = getAccountProvider();

  const callbackUrl = `${window?.location?.origin}${callbackRoute}`;

  const signableMessage = await getSignableMessage({
    address,
    message
  });
  const signedMessage = await provider.signMessage(signableMessage, {
    callbackUrl: encodeURIComponent(callbackUrl)
  });

  return signedMessage;
};
