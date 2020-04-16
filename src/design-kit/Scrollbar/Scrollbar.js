import React from 'react';
import styled from 'styled-components';
import ScrollbarElement from './ScrollbarElement';

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

    render() {
        const scrollbarElems = this.props.elems.map((e, i) => {
            if (e) {
                return (
                    <ScrollbarElement
                        key={ i }
                        to={ e.key }
                        onClick={ () => {
                            this.props.onClickHandler(e.key, this.scrollbarRef);
                        } }>

                        {e.data}
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
                {scrollbarElems}
            </StyledScrollbar>
        );
    }
}

export default Scrollbar;