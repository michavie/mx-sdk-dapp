import { SignableMessage, Address } from '@multiversx/sdk-core';

export interface SignMessageWithProviderType {
  message: string;
  address: string;
}

export const getSignableMessage = async ({
  message,
  address
}: SignMessageWithProviderType) => {
  const signableMessage = new SignableMessage({
    address: new Address(address),
    message: Buffer.from(message, 'ascii')
  });

  return signableMessage;
};
