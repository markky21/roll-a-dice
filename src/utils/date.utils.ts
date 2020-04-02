import dayjs from 'dayjs';

export const timeStampToFormattedDate: (
  time: string | number
) => string = time => dayjs(time).format('dddd, MMMM D YYYY');
