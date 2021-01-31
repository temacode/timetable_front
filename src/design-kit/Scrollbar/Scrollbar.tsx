import React from 'react';
import styled from 'styled-components';
import ScrollbarElement from './ScrollbarElement';
import { scrollTo } from '../../helpers/scrollLeftAnimation';

const StyledScrollbar = styled.div`
    overflow-x: scroll;
    display: flex;
    align-items: flex-start;
    padding: 10px 15px 20px 15px;

`;

class Scrollbar extends React.Component {

    constructor() {
        super();
        this.scrollbarRef = '';

        this.setScrollbarRef = element => {
            this.scrollbarRef = element;
        };
    }

    componentDidMount() {
        if(!this.props.items) {
            return;
        }
    }

    render() {
        const items = this.props.items.map((e, i) => {
            if (e) {
                return (
                    <ScrollbarElement
                        key={ i }
                        to={ e.path }
                        onClick={ () => {
                            this.props.onClickHandler(e.key);
                            scrollTo(this.scrollbarRef, 0, 300);
                        } }>

                        {e.displayName}
                    </ScrollbarElement>
                );
            }
            return null;
        });

        return (
            <StyledScrollbar ref={ this.setScrollbarRef }>
                {this.props.firstElem ?
                    <ScrollbarElement
                        selected
                        to={ this.props.firstElemKey }>{this.props.firstElem}
                    </ScrollbarElement>
                    : ''}
                {items}
            </StyledScrollbar>
        );
    }
}

export default Scrollbar;