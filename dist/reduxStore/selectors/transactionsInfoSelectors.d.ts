import { RootState } from '../store';
export declare const transactionsInfoSelectors: (state: RootState) => import("reduxStore/slices").StateType;
export declare const transactionDisplayInfoSelector: import("reselect").OutputParametricSelector<import("redux").CombinedState<{
    account: import("reduxStore/slices").AccountInfoSliceType;
    networkConfig: import("reduxStore/slices").NetworkConfigStateType;
    loginInfo: import("reduxStore/slices").LoginInfoStateType;
    modals: import("reduxStore/slices").ModalsSliceState;
    transactions: import("reduxStore/slices").TransactionsSliceStateType;
    transactionsInfo: import("reduxStore/slices").StateType;
}>, string | null, any, (res1: import("reduxStore/slices").StateType, res2: string | null) => any>;
//# sourceMappingURL=transactionsInfoSelectors.d.ts.map