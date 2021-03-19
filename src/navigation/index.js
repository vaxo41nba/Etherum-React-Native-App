import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/Welcome';
import GetStartedScreen from '../screens/GetStarted';
import CreatePasswordScreen from '../screens/CreatePassword';
import AlternatePhraseScreen from '../screens/AlternatePhrase';
import ConfirmPhraseScreen from '../screens/ConfirmPhrase';
import FanwallyAgreementScreen from '../screens/FanwallyAgreement';
import ImportWalletFieldsScreen from '../screens/ImportWallet';
import LogInScreen from '../screens/LogIn';
import MainScreen from '../screens/Main';
import TokenDepositScreen from '../screens/TokenDeposit';
import SendScreen from '../screens/Send';
import SendEthToRecipient from '../screens/SendEthToRecipent';
import ChartScreen from '../screens/LineChart';
import AccountDetailsScreen from '../screens/AccountDetails/AccountDetailsScreen';
import ShowPrivateKeysScreen from '../screens/AccountDetails/ShowPrivateKeys';
import MyCollectiblesScreen from '../screens/MyCollectibles';
import CreateAccountScreen from './CreateAccountNavigation';
import AboutScreen from '../screens/About';
import PrivacyPolicyScreen from '../screens/About/PrivacyPolicy';
import TermsOfUseScreen from '../screens/About/TermsOfUse';
import SettingsScreen from '../screens/Settings';
import GeneralScreen from '../screens/Settings/General';
import AdvancedScreen from '../screens/Settings/Advanced';
import SyncWithMobileScreen from '../screens/Settings/Advanced/SyncWithMobile';
import ContactsScreen from '../screens/Settings/Contacts';
import NewContactScreen from '../screens/Settings/Contacts/NewContact';
import SecurityAndPrivacyScreen from '../screens/Settings/SecurityAndPrivacy';
import RevealSeedWordsScreen from '../screens/Settings/SecurityAndPrivacy/RevealSeedWords';
import NetworksScreen from '../screens/Settings/Networks';
import NetworkScreen from '../screens/Settings/Networks/Network';
import AddNetworkScreen from '../screens/Settings/Networks/AddNetwork';
import ScannerScreen from '../screens/Scanner';

const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    GetStarted: {
      screen: GetStartedScreen,
    },
    CreatePassword: CreatePasswordScreen,
    AlternatePhrase: AlternatePhraseScreen,
    ConfirmPhrase: ConfirmPhraseScreen,
    FanwallyAgreement: FanwallyAgreementScreen,
    ImportWallet: ImportWalletFieldsScreen,
    Main: MainScreen,
    LogIn: LogInScreen,
    TokenDeposit: TokenDepositScreen,
    Send: SendScreen,
    SendEth: SendEthToRecipient,
    Chart: ChartScreen,
    AccountDetails: AccountDetailsScreen,
    ShowPrivateKeys: ShowPrivateKeysScreen,
    MyCollectibles: MyCollectiblesScreen,
    CreateAccount: { screen: CreateAccountScreen, params: { route: 'Create' } },
    ImportAccount: { screen: CreateAccountScreen, params: { route: 'Import' } },
    About: AboutScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsOfUse: TermsOfUseScreen,
    Settings: SettingsScreen,
    General: GeneralScreen,
    Advanced: AdvancedScreen,
    SyncWithMobile: SyncWithMobileScreen,
    Contacts: ContactsScreen,
    NewContact: NewContactScreen,
    SecurityAndPrivacy: SecurityAndPrivacyScreen,
    RevealSeedWords: RevealSeedWordsScreen,
    Networks: NetworksScreen,
    Network: NetworkScreen,
    AddNetwork: AddNetworkScreen,
    Scanner: ScannerScreen,
  },
  { headerMode: 'none' },
);

export default createAppContainer(Navigator);
