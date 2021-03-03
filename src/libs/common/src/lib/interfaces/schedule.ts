import {ScheduleWeek} from "./schedule-week";
import {ScheduleDay} from "./schedule-day";

export interface Schedule {
    cell: string,
    cellName: string,
    celNum: string,
    cellTeacher: string,
    cellLocation: string,
    cellLessonType: string,
    groupNameRus: string,
    groupName: string,
    schedule: ScheduleDay[],
}
