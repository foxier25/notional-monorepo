import { useCurrencyInputRef } from '@notional-finance/mui';
import {
  TransactionSidebar,
  DepositInput,
  CustomTerms,
  ManageTerms,
  useLeveragedNTokenPositions,
} from '@notional-finance/trade';
import { PRODUCTS } from '@notional-finance/util';
import { useContext } from 'react';
import { defineMessage } from 'react-intl';
import { LiquidityContext } from '../../liquidity';
import { LiquidityDetailsTable } from '../components';
import { TransactionNetworkSelector } from '@notional-finance/wallet';

export const CreateOrIncreasePosition = () => {
  const context = useContext(LiquidityContext);
  const {
    state: { selectedDepositToken, debt, selectedNetwork, deposit },
  } = context;
  const { currencyInputRef } = useCurrencyInputRef();
  const { currentPosition, depositTokensWithPositions } =
    useLeveragedNTokenPositions(selectedNetwork, selectedDepositToken);

  return (
    <TransactionSidebar
      context={context}
      riskComponent={currentPosition ? <LiquidityDetailsTable /> : undefined}
      variableBorrowRequired={debt?.tokenType === 'PrimeDebt'}
      NetworkSelector={
        currentPosition === undefined ? (
          <TransactionNetworkSelector
            product={PRODUCTS.LIQUIDITY_LEVERAGED}
            context={context}
          />
        ) : undefined
      }
    >
      <DepositInput
        showScrollPopper
        ref={currencyInputRef}
        inputRef={currencyInputRef}
        context={context}
        newRoute={(newToken) => {
          return `/${PRODUCTS.LIQUIDITY_LEVERAGED}/${selectedNetwork}/${
            depositTokensWithPositions.includes(newToken || '')
              ? 'IncreaseLeveragedNToken'
              : 'CreateLeveragedNToken'
          }/${newToken}`;
        }}
        inputLabel={defineMessage({
          defaultMessage: '1. Enter deposit amount',
          description: 'input label',
        })}
      />
      {currentPosition ? (
        <ManageTerms
          borrowType={
            currentPosition.debt.balance.tokenType === 'PrimeDebt'
              ? 'Variable'
              : 'Fixed'
          }
          leverageRatio={currentPosition.leverageRatio}
          linkString={`/${PRODUCTS.LIQUIDITY_LEVERAGED}/${selectedNetwork}/Manage/${deposit?.symbol}`}
        />
      ) : (
        <CustomTerms context={context} />
      )}
    </TransactionSidebar>
  );
};
