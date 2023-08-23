import {
  AddressButton,
  WalletSwitcher,
  Privacy,
  Language,
  LanguageButton,
  NetworkSelector,
  NetworkSettingsButton,
  EnabledCurrencies,
  EnabledCurrenciesButton,
  BaseCurrency,
  BaseCurrencyButton,
  DarkModeToggle,
} from './components';
import { FormattedMessage } from 'react-intl';
import { ReactNode } from 'react';
import PrimeBorrowToggle from './prime-borrow-toggle/prime-borrow-toggle';
import { useTruncatedAddress } from '@notional-finance/notionable-hooks';

export interface SettingsItem {
  key: string;
  active: boolean;
  label: ReactNode;
  CustomButton?: React.ElementType;
  ViewComponent?: React.ElementType;
  buttonText?: string;
}

export const useSettingsSideDrawer = () => {
  const truncatedAddress = useTruncatedAddress();
  const walletAction = truncatedAddress
    ? {
        key: 'reset-wallets',
        active: false,
        label: (
          <FormattedMessage
            defaultMessage="Reset Wallets"
            description={'Reset Wallets option title'}
          />
        ),
        CustomButton: AddressButton,
        ViewComponent: WalletSwitcher,
        buttonText: '',
      }
    : {
        key: 'connect-wallet',
        active: false,
        label: (
          <FormattedMessage
            defaultMessage="Connect Wallet"
            description={'Connect Wallet option title'}
          />
        ),
        CustomButton: AddressButton,
        ViewComponent: WalletSwitcher,
        buttonText: '',
      };

  const accountData: SettingsItem[] = [
    // {
    //   key: 'notifications-settings',
    //   active: false,
    //   label: 'Notification & Reminder Settings',
    //   buttonText: 'Default',
    // },
    {
      key: 'network',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Network"
          description={'Network option title'}
        />
      ),
      ViewComponent: NetworkSelector,
      CustomButton: NetworkSettingsButton,
      buttonText: '',
    },
    {
      key: 'language',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Language"
          description={'Language option title'}
        />
      ),
      CustomButton: LanguageButton,
      ViewComponent: Language,
      buttonText: 'English',
    },
    {
      key: 'privacy',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Privacy"
          description={'Privacy option title'}
        />
      ),
      ViewComponent: Privacy,
      buttonText: 'Default',
    },
    {
      key: 'darkMode',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Dark Mode"
          description={'Dark Mode option title'}
        />
      ),
      CustomButton: DarkModeToggle,
      buttonText: '',
    },
  ];

  accountData.unshift(walletAction);

  const transactionData: SettingsItem[] = [
    // {
    //   key: 'slippage-buffer',
    //   active: false,
    //   label: 'Slippage Buffer',
    //   buttonText: '0.1%',
    // },
    // {
    //   key: 'token-approval',
    //   active: false,
    //   label: 'Token Approval',
    //   buttonText: 'Unlimited',
    // },
    {
      key: 'enabled-currencies',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Enabled Currencies"
          description={'Enabled Currencies title'}
        />
      ),
      ViewComponent: EnabledCurrencies,
      CustomButton: EnabledCurrenciesButton,
      buttonText: '',
    },
    {
      key: 'base-currency',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Base Currency"
          description={'Base Currency option title'}
        />
      ),
      ViewComponent: BaseCurrency,
      CustomButton: BaseCurrencyButton,
      buttonText: '',
    },
    {
      key: 'primeBorrow',
      active: false,
      label: (
        <FormattedMessage
          defaultMessage="Prime Borrow"
          description={'Dark Mode option title'}
        />
      ),
      CustomButton: PrimeBorrowToggle,
      buttonText: '',
    },
  ];

  return {
    accountData,
    transactionData,
  };
};

export default useSettingsSideDrawer;
