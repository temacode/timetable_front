import React from 'react';
import LessonListContainer from './LessonListContainer';

const Group = props => {
    setInterval(() => {
        props.updateSavedTime();
    }, 1000);
    let lessonList = props.group.shedule.map((lessonList, i) => {
        if (lessonList) {
            return (
                <LessonListContainer key={ i }
                    first={ i === 0 }
                    lessonList={ lessonList }
                    dayName={ lessonList[0].dayName }>
                </LessonListContainer>
            );
        }

        return null;
    });
    return (
        <div>{lessonList}</div>
    );
};

export default Group;