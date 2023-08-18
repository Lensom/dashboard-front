import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export * from './stocks';

export const drawerWidth = 240;

export const navigation = [
  {
    id: 0,
    url: '/',
    name: 'Homepage',
    Icon: HomeIcon,
  },
  {
    id: 1,
    url: '/dashboard',
    name: 'Dashboard',
    Icon: CreditCardIcon,
  },
  {
    id: 2,
    url: '/portfolio',
    name: 'Portfolio',
    Icon: ShowChartIcon,
  },
  {
    id: 3,
    url: '/savings',
    name: 'Savings',
    Icon: SavingsIcon,
  },
];

export const API_URL = 'http://192.168.88.239:3001';

export const red = 'rgba(255, 86, 48, 0.16)';
export const green = 'rgba(91, 228, 155, 0.2)';
