import React from 'react';
import HeaderContainer from './Header/HeaderContainer';
import styled from 'styled-components';
import Scrollbar from '../design-kit/Scrollbar/Scrollbar';

const Content = styled.div`
    padding: 0px 20px;
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

const HelloPage = props => {
    if (!props.services) {
        console.log(props.services);
        props.loadServices();
        return (<p>Loading</p>);
    }
    //TODO выынести код ниже в маппре и сооздать сам маппре

    const onClickHandler = (elem) => {
        props.selectService(elem);
    };
    return(
        <div>
            <HeaderContainer></HeaderContainer>
            <Scrollbar
                elems={ props.services }
                firstElem={ props.selectedService }
                onClickHandler={ onClickHandler }>
            </Scrollbar>
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

export default HelloPage;