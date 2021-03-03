import React from 'react';
import LessonListContainer from './LessonListContainer';
import {Schedule} from "../libs/common/src/lib/interfaces/schedule";

interface GroupProps {
    updateSavedTime: any,
    group: Schedule
}

const GroupComponent = (props: GroupProps) => {
    setInterval(() => {
        props.updateSavedTime();
    }, 10000);
    console.log(props.group);
    let lessonList = props.group.schedule.map((lessonList, i) => {
        if (lessonList) {
            return (
                <LessonListContainer key={ i }
                    first={ i === 0 }
                    week={props.group.schedule}
                    lessonList={ lessonList }
                    dayName={ lessonList.dayName }/>
            );
        }

        return null;
    });
    return (
        <div>{lessonList}</div>
    );
};

export default GroupComponent;
