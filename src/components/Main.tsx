import React from 'react';
import GroupContainer from './GroupContainer';
import HeaderContainer from './Header/HeaderContainer';
import Scrollbar from '../design-kit/Scrollbar/Scrollbar';
import { Redirect } from 'react-router-dom';

class Main extends React.Component<any, any> {
    componentDidMount() {
        if (new RegExp(/[\w]{4}-[\d]{2}-[\d]{2}/gi).test(this.props.location.pathname)) {
            this.props.getShedule((this.props.location.pathname.split('/'))[1]);
        } else {
            this.props.getShedule();
        }
    }

    render() {
        let groupSelectList = this.props.groups.map((e) => {
            if (e.groupName !== this.props.selectedGroup) {
                return ({
                    path: e.groupName,
                    displayName: e.groupNameRus,
                });
            }
            return null;
        });

        let groups = this.props.groups.map((e, i) => {
            if (e.groupName === this.props.selectedGroup) {
                return (<GroupContainer key={ i } group={ e }></GroupContainer>);
            }
            return null;
        });

        const onClickHandler = (elem) => {
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
                <HeaderContainer></HeaderContainer>
                <Scrollbar
                    elems={ this.props.services }
                    firstElem={ this.props.selectedservice }>
                </Scrollbar>
                <Scrollbar
                    elems={ groupSelectList }
                    firstElem={ this.props.selectedGroupRus }
                    firstElemKey={ this.props.selectedGroup }
                    onClickHandler={ onClickHandler }>
                </Scrollbar>
                {this.props.groups.length > 0 ? groups : 'Загрузка'}
            </div>
        );
    }
}

export default Main;