
export const getYMDString = (dateObj = new Date()) => { // 2020-04-14
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `${year}-${month}-${day}`;
};