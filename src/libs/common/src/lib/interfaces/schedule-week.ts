import {ScheduleDay} from "./schedule-day";

export interface ScheduleWeek {
    [index: number]: ScheduleDay[];
}
