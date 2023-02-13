import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { useGetAccountInfo } from 'hooks/account/useGetAccountInfo';
import { useLedgerLogin } from 'hooks/login/useLedgerLogin';
import { ModalContainer } from 'UI/ModalContainer';
import { ScamPhishingAlert } from 'UI/ScamPhishingAlert';

import type { OnProviderLoginType } from '../../../types';
import type { WithClassnameType } from '../../types';
import type { InnerLedgerComponentsClassesType } from './types';

import { AddressTable } from './AddressTable';
import { ConfirmAddress } from './ConfirmAddress';
import { LedgerLoading } from './LedgerLoading';
import { LedgerConnect } from './LedgerConnect';
import { LedgerProgressBar } from './LedgerProgressBar';

import styles from './ledgerLoginContainerStyles.scss';

export interface LedgerLoginContainerPropsType
  extends OnProviderLoginType,
    WithClassnameType {
  wrapContentInsideModal?: boolean;
  onClose?: () => void;
  customSpinnerComponent?: ReactNode;
  customContentComponent?: ReactNode;
  innerLedgerComponentsClasses?: InnerLedgerComponentsClassesType;
  showProgressBar?: boolean;
  showScamPhishingAlert?: boolean;
}

export const LedgerLoginContainer = ({
  callbackRoute,
  className = 'dapp-ledger-login-container',
  wrapContentInsideModal = true,
  onClose,
  onLoginRedirect,
  token,
  nativeAuth,
  customSpinnerComponent,
  customContentComponent,
  innerLedgerComponentsClasses,
  showProgressBar = true,
  showScamPhishingAlert = true
}: LedgerLoginContainerPropsType) => {
  const { ledgerAccount } = useGetAccountInfo();
  const [
    onStartLogin,
    { error, isLoading },
    {
      showAddressList,
      accounts,
      onGoToPrevPage,
      onGoToNextPage,
      onSelectAddress,
      onConfirmSelectedAddress,
      startIndex,
      selectedAddress
    }
  ] = useLedgerLogin({ callbackRoute, token, onLoginRedirect, nativeAuth });

  const {
    addressTableClassNames,
    confirmAddressClassNames,
    ledgerConnectClassNames,
    ledgerLoadingClassNames,
    ledgerProgressBarClassNames,
    ledgerScamPhishingAlertClassName
  } = innerLedgerComponentsClasses || {};

  const getScamPhishingAlert = () => {
    if (!showScamPhishingAlert) {
      return null;
    }

    return (
      <ScamPhishingAlert
        url={window.location.origin}
        className={ledgerScamPhishingAlertClassName}
      />
    );
  };

  const getProgressBar = () => {
    const progressStep = [
      {
        percentage: 33,
        conditions: !showAddressList && !ledgerAccount
      },
      {
        conditions: showAddressList && !error && !ledgerAccount,
        percentage: 66
      },
      {
        conditions: ledgerAccount != null && !error,
        percentage: 100
      }
    ];

    const currentProgress = progressStep.find((step) => step.conditions);
    const percentage = currentProgress ? currentProgress.percentage : 33;

    if (!showProgressBar) {
      return null;
    }

    return (
      <LedgerProgressBar
        percentage={percentage}
        ledgerProgressBarClassNames={ledgerProgressBarClassNames}
      />
    );
  };

  const getContent = () => {
    if (isLoading) {
      return (
        <LedgerLoading
          customSpinnerComponent={customSpinnerComponent}
          customContentComponent={customContentComponent}
          ledgerLoadingClassNames={ledgerLoadingClassNames}
        />
      );
    }

    if (ledgerAccount != null && !error) {
      return (
        <ConfirmAddress
          token={token}
          customContentComponent={customContentComponent}
          confirmAddressClassNames={confirmAddressClassNames}
        />
      );
    }

    if (showAddressList && !error) {
      return (
        <AddressTable
          accounts={accounts}
          loading={isLoading}
          onGoToNextPage={onGoToNextPage}
          onGoToPrevPage={onGoToPrevPage}
          onSelectAddress={onSelectAddress}
          startIndex={startIndex}
          selectedAddress={selectedAddress?.address}
          onConfirmSelectedAddress={onConfirmSelectedAddress}
          customContentComponent={customContentComponent}
          addressTableClassNames={addressTableClassNames}
        />
      );
    }

    return (
      <LedgerConnect
        error={error}
        onClick={onStartLogin}
        customContentComponent={customContentComponent}
        ledgerConnectClassNames={ledgerConnectClassNames}
      />
    );
  };

  return wrapContentInsideModal ? (
    <ModalContainer
      onClose={onClose}
      modalConfig={{
        headerText: 'Login with ledger',
        showHeader: true,
        modalContentClassName: styles.ledgerModalDialogContent,
        modalHeaderClassName: styles.ledgerModalHeader,
        modalHeaderTextClassName: styles.ledgerModalHeaderText,
        modalCloseButtonClassName: styles.ledgerModalCloseButton,
        modalBodyClassName: styles.ledgerModalBody,
        modalDialogClassName: classNames(styles.ledgerLoginContainer, className)
      }}
    >
      {getScamPhishingAlert()}
      {getProgressBar()}
      {getContent()}
    </ModalContainer>
  ) : (
    <>
      {getScamPhishingAlert()}
      {getProgressBar()}
      {getContent()}
    </>
  );
};
