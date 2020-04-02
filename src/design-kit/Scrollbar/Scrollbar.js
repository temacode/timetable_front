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

    render() {
        const scrollbarElems = this.props.elems.map((e, i) => {
            if (e) {
                return (
                    <ScrollbarElement
                        key={i}
                        to={e.key}
                        onClick={() => {
                            this.props.onClickHandler(e.key, this.refs.scrollbar);
                        }}>

                        {e.data}
                    </ScrollbarElement>
                );
            }
            return null;
        });

        return (
            <StyledScrollbar ref="scrollbar">
                {this.props.firstElem ?
                <ScrollbarElement to={this.props.firstElemKey} selected>{this.props.firstElem}
                </ScrollbarElement>
                : ''}
                {scrollbarElems}
            </StyledScrollbar>
        );
    }
};

export default Scrollbar;