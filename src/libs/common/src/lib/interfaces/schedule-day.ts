import {ScheduleLesson} from "./schedule-lesson";

export interface ScheduleDay {
    dayName: string,
    num: number,
    timeStart: string,
    timeEnd: string,
    startMin: number,
    endMin: number,
    parity: boolean,
    cell: string,
    teacherCell: string,
    locationCell: string,
    lessonTypeCell: string,
    fullString: string,
    debug: any,
    lesson: ScheduleLesson,
}
