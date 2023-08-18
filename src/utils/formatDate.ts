import { format } from 'date-fns';

export const formatDate = (date: string) => {
  const defaultDate = new Date(date);
  const formattedDate = format(defaultDate, 'dd-MM-yyyy');

  return formattedDate;
};
