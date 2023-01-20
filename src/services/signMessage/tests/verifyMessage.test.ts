import { verifyMessage } from '../verifyMessage';

const messageToVerify =
  '{"address":"erd15s35epmf7pvq822yrcgr20utj8lsn7fvgqnrl3ls9gtazu7leeyqr5kkaf","message":"0x746573742d6d657373616765","signature":"0x297ab28e24243727a4e5529732e87e0814aaa07e9e0f251fc6b7b26286cd45c0087715a99147ca324cc41cf363e0003225c74b12670b1fbda14278758c6e7e01","version":1,"signer":"ErdJS"}';

describe('VerifyMessage tests', () => {
  it('should verify a valid json', () => {
    const result = verifyMessage(messageToVerify);
    expect(result).toBe(true);
  });
});
