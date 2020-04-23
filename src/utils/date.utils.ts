import dayjs from 'dayjs';

export const dateUtils = {
  timeStampToFormattedDate: (time: string | number): string =>
    dayjs(new Date(new Date(+time))).format('dddd, MMMM D YYYY'),

  timeStampToDetailedTime: (time: string | number): string => dayjs(new Date(new Date(+time))).format('h:mm:ss'),
};
