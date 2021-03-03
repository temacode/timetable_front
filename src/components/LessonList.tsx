import React from 'react';
import styled from 'styled-components';
import { lessonActiveCheck } from '../helpers/lessonActiveCheck';
import {ScheduleLesson} from "../libs/common/src/lib/interfaces/schedule-lesson";
import {ScheduleDay} from "../libs/common/src/lib/interfaces/schedule-day";
import {Schedule} from "../libs/common/src/lib/interfaces/schedule";
import {ScheduleWeek} from "../libs/common/src/lib/interfaces/schedule-week";

const MainBody = styled.div`
    width: calc(100% - 30px);
    margin: 20px 15px;
    min-height: 200px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 1px 6px 1px rgba(0,0,0,0.15);
    padding-bottom: 1px;
`;

const DayHeader = styled.div`
    width: 100%;
    padding: 15px 0;
    text-align: center;
    font-family: Rubik Mono One;
`;
interface IIsActive {
    readonly active: boolean
}
const Lesson = styled.div<IIsActive>`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 5px 10px;
    box-sizing: border-box;
    background: ${({ active }) => active ? 'linear-gradient(91.07deg, #74C681 0%, #7D8393 100%);': 'white'};
    border-radius: ${({ active }) => active ? '6px' : '0'};
    width: ${({ active  }) => active ? '96%' : '100%'};
    margin-left: ${({ active }) => active ? '2%': ''};
    * {
        font-size: 12px;
    }

    :last-child {
        margin-bottom: 0;
    }
`;
const Num = styled.div<IIsActive>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-weight: 600;
    color: ${({ active }) => active ? 'white': '#999'};
    min-width: 10px;
`;
const Time = styled.div<IIsActive>`
    border-right: ${({ active }) => active ? '1px solid white': '1px solid #eaeaea'};
    font-weight: 600;
    padding-right: 4px;
    div {
        width: 100%;
        color: ${({ active }) => active ? 'white': ''};
        text-align: right;
    }
`;
const Name = styled.div<IIsActive>`
    width: 40%;
    font-weight: 300;
    color: ${({ active }) => active ? 'white': ''};
`;

const LessonLocation = styled.div<IIsActive>`
    color: ${({ active }) => active ? 'white': ''};
`;

const Teacher = styled.div<IIsActive>`
    width: 35%;
    text-align: right;
    font-weight: 700;
    color: ${({ active }) => active ? 'white': '#999'};
`;

interface ITimeNowProps {
    readonly top: number;
}

const TimeNow = styled.div<ITimeNowProps>`
    position: absolute;
    width: 20px;
    height: 2px;
    background: #AFACD8;
    top: ${({ top })  => `${top}%`};
    right: 0;
    ::before {
        position: absolute;
        display: block;
        content: '';
        z-index: 10;
        top: -2px;
        left: -2px;
        width: 6px;
        height: 6px;
        border-radius: 5px;
        background: #AFACD8;
    }
`;

const TillEnd = styled.div`
    width: 100%;
    margin-top: 5px;
    margin-right: 20px;
    font-weight: 700;
    color: white;
`;

interface LessonListProps{
    dayName: string,
    first: boolean,
    week: ScheduleDay[],
    lessonList: ScheduleDay
}

const LessonList = (props: LessonListProps) => {
    const nowMin = new Date().getHours()*60+new Date().getMinutes();

    const lessons = props.week.map((lesson, i) => {
        const isLessonActive = lessonActiveCheck(lesson.startMin, lesson.endMin, nowMin, lesson.dayName) && props.first;
        const tillEnd = lesson.endMin-nowMin;
        const topMargin = Math.min(100/90*(nowMin-lesson.startMin));
        return (
            <Lesson key={ i } active={ isLessonActive }>
                {isLessonActive ? <TimeNow top={ topMargin }/> : ''}
                <Num active={ isLessonActive }>{i + 1}</Num>
                <Time active={ isLessonActive }>
                    <div>{lesson.timeStart}</div>
                    <div>{lesson.timeEnd}</div>
                </Time>
                <Name active={ isLessonActive }>
                    {lesson.lesson ? lesson.lesson.name : ''}
                    <LessonLocation active={ isLessonActive }>
                        {lesson.lesson && lesson.lesson.location ? lesson.lesson.location : ''}
                        {lesson.lesson && lesson.lesson.type ? ', '+lesson.lesson.type : ''}
                    </LessonLocation>
                </Name>
                <Teacher active={ isLessonActive }>{lesson.lesson ? lesson.lesson.teacher : ''}</Teacher>
                {isLessonActive && tillEnd < 60 ? <TillEnd>До конца {lesson.endMin-nowMin} минут</TillEnd> : ''}
            </Lesson>
        );
    });
    return (
        <MainBody>
            <DayHeader>{props.dayName}</DayHeader>
            {lessons}
        </MainBody>
    );
};

export default LessonList;
