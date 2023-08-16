import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';

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

interface StockInfoBackgrounds {
  [key: string]: string;
}

interface StockInfoColors {
  [key: string]: string;
}

export const stockInfoBackgrounds: StockInfoBackgrounds = {
  green:
    'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)',
  red: 'linear-gradient(135deg, rgba(255, 172, 130, 0.2), rgba(255, 86, 48, 0.2)) rgb(255, 255, 255)',
  yellow:
    'linear-gradient(135deg, rgba(255, 214, 102, 0.2), rgba(255, 171, 0, 0.2)) rgb(255, 255, 255)',
};

export const stockInfoColors: StockInfoColors = {
  green: 'rgb(0, 75, 80)',
  red: 'rgb(122, 9, 22)',
  yellow: 'rgb(122, 65, 0)',
};
