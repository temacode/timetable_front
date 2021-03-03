import React from 'react';
import GroupContainer from './group.container';
import Scrollbar from '../design-kit/Scrollbar/Scrollbar';
import { Redirect } from 'react-router-dom';
import {HeaderContainer} from "../libs/header/src";
import {Schedule} from "../libs/common/src/lib/interfaces/schedule";
import {IScrollbarElementProps} from "../design-kit/Scrollbar/ScrollbarElement";
import {IService} from "../reducers/mainReducer";

interface IMainProps {
    location?: any,
    getSchedule: (x?: any) => any,
    setGroup: (x: string) => void
    schedule: Schedule[],
    selectedGroup: string,
    services: IScrollbarElementProps[],
    selectedService?: string,
    selectedGroupRus: string
}

class MainComponent extends React.Component<IMainProps, any> {
    componentDidMount() {
        if (new RegExp(/[\w]{4}-[\d]{2}-[\d]{2}/gi).test(this.props.location.pathname)) {
            this.props.getSchedule((this.props.location.pathname.split('/'))[1]);
        } else {
            this.props.getSchedule();
        }
    }

    render() {
        const groupSelectList: IScrollbarElementProps[] = this.props.schedule
            .filter(x => x.groupName !== this.props.selectedGroup)
            .map((x) => {
                return ({
                    to: x.groupName,
                    selected: false,
                    displayName: x.groupNameRus,
                }) as IScrollbarElementProps;
        });

        let groups = this.props.schedule.map((e, i) => {
            if (e.groupName === this.props.selectedGroup) {
                return (<GroupContainer key={ i } group={ e }/>);
            }
            return null;
        });

        const onClickHandler = (elem: string) => {
            this.props.setGroup(elem);
        };
        return (
            <div>
                {
                    this.props.location.pathname === '/' && this.props.selectedGroup ?
                        <Redirect to={ this.props.selectedGroup }>
                        </Redirect>
                        : ''
                }
                <HeaderContainer />
                <Scrollbar
                    items={ this.props.services }
                    firstElem={ this.props.selectedService! }/>
                <Scrollbar
                    items={ groupSelectList }
                    firstElem={ this.props.selectedGroupRus }
                    firstElemKey={ this.props.selectedGroup }
                    onClickHandler={ onClickHandler }/>
                {this.props.schedule.length > 0 ? groups : 'Загрузка'}
            </div>
        );
    }
}

export default MainComponent;
