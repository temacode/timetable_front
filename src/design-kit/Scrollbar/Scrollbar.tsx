import React, {RefObject} from 'react';
import styled from 'styled-components';
import ScrollbarElement, {IScrollbarElementProps} from './ScrollbarElement';
import { scrollTo } from '../../helpers/scrollLeftAnimation';

const StyledScrollbar = styled.div`
    overflow-x: scroll;
    display: flex;
    align-items: flex-start;
    padding: 10px 15px 20px 15px;

`;

interface IScrollbarProps {
    firstElem: string,
    firstElemKey?: any,
    items: IScrollbarElementProps[],
    onClickHandler?: (x: any) => any,
}

class Scrollbar extends React.Component<IScrollbarProps, any> {

    private readonly scrollbarRef: React.RefObject<HTMLDivElement>;

    constructor(props: IScrollbarProps) {
        super(props);
        this.scrollbarRef = React.createRef();
    }

    componentDidMount() {
        if (!this.props.items) {
            return;
        }
    }

    render() {
        const items = this.props.items.map((e, i) => {
            if (e) {
                return (
                    <ScrollbarElement
                        key={ i }
                        to={ e.to }
                        displayName={e.displayName}
                        onClick={ () => {
                            this.props.onClickHandler!(e);
                            scrollTo(this.scrollbarRef!, 0, 300);
                        }}/>
                );
            }
            return null;
        });

        return (
            <StyledScrollbar ref={ this.scrollbarRef }>
                {this.props.firstElem ?
                    <ScrollbarElement selected to={ this.props.firstElemKey } displayName={this.props.firstElem}/>
                    : ''}
                {items}
            </StyledScrollbar>
        );
    }
}

export default Scrollbar;
