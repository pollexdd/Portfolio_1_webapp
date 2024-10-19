// src/utils/dateUtils.ts
import * as dayjs from 'dayjs';

export const formatDate = (date: string, format: string = 'YYYY-MM-DD') => {
    return dayjs(date).format(format);
};

export const isValidDate = (date: string) => {
    return dayjs(date).isValid();
};
