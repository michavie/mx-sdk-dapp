window.scrollTo = jest.fn();

jest.mock('./utils/network/getEgldLabel', () => {
  return {
    __esModule: true, // this property makes it work
    getEgldLabel: () => {
      return 'EGLD';
    }
  };
});

jest.mock('./hooks/useGetNetworkConfig', () => {
  return {
    __esModule: true,
    useGetNetworkConfig: () => {
      const { fallbackNetworkConfigurations } = require('./constants/network');
      return {
        network: fallbackNetworkConfigurations.devnet
      };
    }
  };
});

// resplves import error
jest.mock(
  '@elrondnetwork/erdjs-wallet-connect-provider/out/walletConnectV2Provider',
  () => {
    return {
      __esModule: true
    };
  }
);

jest.mock('react-redux/es/utils/Subscription', () => {
  return {
    __esModule: true,
    createSubscription: (store, parentSub) => {
      function defaultNoopBatch(callback) {
        callback();
      }

      let batch = defaultNoopBatch; // Allow injecting another batching function later

      const getBatch = () => batch;
      function createListenerCollection() {
        const batch = getBatch();
        let first = null;
        let last = null;
        return {
          clear() {
            first = null;
            last = null;
          },

          notify() {
            batch(() => {
              let listener = first;

              while (listener) {
                listener.callback();
                listener = listener.next;
              }
            });
          },

          get() {
            let listeners = [];
            let listener = first;

            while (listener) {
              listeners.push(listener);
              listener = listener.next;
            }

            return listeners;
          },

          subscribe(callback) {
            let isSubscribed = true;
            let listener = (last = {
              callback,
              next: null,
              prev: last
            });

            if (listener.prev) {
              listener.prev.next = listener;
            } else {
              first = listener;
            }

            return function unsubscribe() {
              if (!isSubscribed || first === null) return;
              isSubscribed = false;

              if (listener.next) {
                listener.next.prev = listener.prev;
              } else {
                last = listener.prev;
              }

              if (listener.prev) {
                listener.prev.next = listener.next;
              } else {
                first = listener.next;
              }
            };
          }
        };
      }
      const nullListeners = {
        notify: () => ({}),

        get: () => []
      };
      let unsubscribe;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      let listeners = nullListeners;

      function addNestedSub(listener) {
        trySubscribe();
        return listeners.subscribe(listener);
      }

      function notifyNestedSubs() {
        listeners.notify();
      }

      function handleChangeWrapper() {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (subscription.onStateChange) {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          subscription.onStateChange();
        }
      }

      function isSubscribed() {
        return Boolean(unsubscribe);
      }

      function trySubscribe() {
        if (!unsubscribe) {
          unsubscribe = parentSub
            ? parentSub.addNestedSub(handleChangeWrapper)
            : store.subscribe(handleChangeWrapper);
          listeners = createListenerCollection();
        }
      }

      function tryUnsubscribe() {
        if (unsubscribe) {
          unsubscribe();
          unsubscribe = undefined;
          listeners.clear();
          listeners = nullListeners;
        }
      }

      const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe,
        tryUnsubscribe,
        getListeners: () => listeners
      };
      return subscription;
    }
  };
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
