import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans Variable',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            // Задайте стили для состояния focused
            color: 'green', // Измените цвет рамки
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'green', // Изменение цвета рамки в состоянии focused
            },
          },
        },
      },
    },
  },
});

export default theme;
