import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

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
    subItems: [
      {
        id: 10,
        url: '/portfolio/overview',
        name: 'Overview',
        Icon: InventoryIcon,
      },
      {
        id: 11,
        url: '/portfolio/wishlist',
        name: 'Wishlist',
        Icon: LibraryAddIcon,
      },
    ],
  },
  {
    id: 3,
    url: '/savings',
    name: 'Savings',
    Icon: SavingsIcon,
  },
];

export const red = 'rgba(255, 86, 48, 0.16)';
export const green = 'rgba(91, 228, 155, 0.2)';
