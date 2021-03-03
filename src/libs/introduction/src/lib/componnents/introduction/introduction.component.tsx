import React from 'react';
import styled from 'styled-components';
import Scrollbar from "../../../../../../design-kit/Scrollbar/Scrollbar";
import {HeaderContainer} from "../../../../../header/src";
import {IService} from "../../../../../../reducers/mainReducer";
import {IScrollbarElementProps} from "../../../../../../design-kit/Scrollbar/ScrollbarElement";

const Content = styled.div`
    padding: 0 20px;
    margin-top: 20px;
`;

const HelloPageText = styled.h2`
    font-size: 40px;
    color: #999;
`;

const HelloPageSubText = styled(HelloPageText)`
    font-size: 24px;
    margin-top: 10px;
`;

interface IIntroductionComponentProps {
    services: IScrollbarElementProps[],
    selectedService: string,
    loadServices: () => any,
    selectService: (x: any) => any,
}

const IntroductionComponent = (props: IIntroductionComponentProps) => {
    if (props.services.length === 0) {
        props.loadServices();
        return (<p>Loading</p>);
    } else {
        console.log('Сервисы', props.services);
    }
    //TODO выынести код ниже в маппер и сооздать сам маппер

    const onClickHandler = (elem: any) => {
        props.selectService(elem);
    };
    return(
        <div>
            <HeaderContainer />
            <Scrollbar
                items={ props.services }
                firstElem={ props.selectedService }
                onClickHandler={ onClickHandler } />
            <Content>
                <HelloPageText>
                    Добро <br />пожаловать
                </HelloPageText>
                <HelloPageSubText>
                    Здесь можно посмотреть расписание
                </HelloPageSubText>
                <HelloPageSubText>
                    Просто кликните на него <span role="img" aria-label="">🙂</span>
                </HelloPageSubText>
            </Content>
        </div>
    );
};

export default IntroductionComponent;
