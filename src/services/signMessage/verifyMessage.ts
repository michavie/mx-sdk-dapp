import { Address } from '@multiversx/sdk-core/out/address';
import { SignableMessage } from '@multiversx/sdk-core/out/signableMessage';
import { Signature } from '@multiversx/sdk-core/out/signature';
import { UserPublicKey } from '@multiversx/sdk-wallet/out/userKeys';
import { UserVerifier } from '@multiversx/sdk-wallet/out/userVerifier';

export const verifyMessage = (signedMessage: string) => {
  try {
    const { message, address, signature } = JSON.parse(signedMessage);

    const signedM = new SignableMessage({
      address: new Address(address),
      message: Buffer.from(message.replace('0x', ''), 'hex'),
      signature: new Signature(signature)
    });
    const publicKey = new UserPublicKey(Address.fromString(address).pubkey());
    const verifier = new UserVerifier(publicKey);

    return verifier.verify(signedM);
  } catch (error) {
    console.log(error);

    return false;
  }
};
