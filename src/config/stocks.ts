interface StockInfoBackgrounds {
  [key: string]: string;
}

interface StockInfoColors {
  [key: string]: string;
}

interface ICells {
  id: number;
  title: string | null;
  align: 'center' | 'left' | 'right' | 'inherit' | 'justify' | undefined;
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

export const cells: Array<ICells> = [
  {
    id: 0,
    title: null,
    align: 'left',
  },
  {
    id: 1,
    title: 'Name',
    align: 'left',
  },
  {
    id: 2,
    title: 'Ticker',
    align: 'center',
  },
  {
    id: 3,
    title: 'Count',
    align: 'center',
  },
  {
    id: 4,
    title: 'Avg Buy Price',
    align: 'center',
  },
  {
    id: 5,
    title: 'Current Price',
    align: 'center',
  },
  {
    id: 6,
    title: 'Profit/loss, $',
    align: 'center',
  },
  {
    id: 7,
    title: 'Profit/loss, %',
    align: 'center',
  },
  {
    id: 8,
    title: 'Sum, $',
    align: 'center',
  },
  {
    id: 9,
    title: 'Current Sum, $',
    align: 'center',
  },
  {
    id: 10,
    title: null,
    align: 'left',
  },
  {
    id: 11,
    title: null,
    align: 'left',
  },
];
