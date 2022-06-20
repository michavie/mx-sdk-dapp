/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
export declare const store: import("@reduxjs/toolkit").EnhancedStore<any, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined>, ...any[]]>>;
export declare const persistor: import("redux-persist").Persistor;
declare const storeType: import("@reduxjs/toolkit").EnhancedStore<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    transactionsInfo: import("reduxStore/slices").StateType;
}>, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    transactionsInfo: import("reduxStore/slices").StateType;
}>, import("redux").AnyAction, undefined>]>;
export declare type StoreType = typeof storeType;
export declare type RootState = ReturnType<typeof storeType.getState>;
export declare type AppDispatch = typeof store.dispatch;
export {};
//# sourceMappingURL=store.d.ts.map