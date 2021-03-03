export const lessonActiveCheck = (startMin: number, endMin: number, nowMin: number, dayName: string) => {
    const dayNum = (name: string) => {
        switch (dayName) {
            case 'Понедельник': {
                return 1;
            }
            case 'Вторник': {
                return 2;
            }
            case 'Среда': {
                return 3;
            }
            case 'Четверг': {
                return 4;
            }
            case 'Пятница': {
                return 5;
            }
            case 'Суббота': {
                return 6;
            }
            default: {
                return 7;
            }
        }
    };

    return ((nowMin >= startMin) && (nowMin < endMin && dayNum(dayName) ===  (new Date()).getDay()));
};
