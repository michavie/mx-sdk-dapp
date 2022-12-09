import * as timestampModule from '../../../../utils/dateTime/getUnixTimestamp';
import { getIsTokenExpired } from '../../methods/getIsTokenExpired';

// 1669712100 Tue Nov 29 2022 08:55:00 GMT+0000
// 2 minutes expiration time
const nativeAuthToken =
  'ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.Wld4eWIyNWtMbU52YlEuYjNkMDc1NjUyOTNmZDU2ODRjOTdkMmI5NmViODYyZDEyNGZkNjk4Njc4ZjNmOTViMjUxNWVkMDcxNzhhMjdiNC4xMjAuZXlKMGFXMWxjM1JoYlhBaU9qRTJOamszTVRJeE1EQjk.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e';

describe('getIsTokenExpired tests', () => {
  it('checks expired true', () => {
    const timestamp = 1669712400; // Tue Nov 29 2022 09:00:00 GMT+0000
    jest.spyOn(timestampModule, 'getUnixTimestamp').mockReturnValue(timestamp);

    const isExpired = getIsTokenExpired(nativeAuthToken);
    expect(isExpired).toStrictEqual(true);
  });
  it('checks expired false', () => {
    const timestamp = 1669712160; //Tue Nov 29 2022 08:56:00 GMT+0000
    jest.spyOn(timestampModule, 'getUnixTimestamp').mockReturnValue(timestamp);

    const isExpired = getIsTokenExpired(nativeAuthToken);
    expect(isExpired).toStrictEqual(false);
  });
});