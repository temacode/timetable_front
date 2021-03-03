import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

interface ISelected extends Link {
    readonly selected: boolean;
}

const StyledScrollbarElement = styled(({selected, ...rest}) => <Link {...rest}/>)<{
    selected: boolean
}>`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 8px 16px;
    border-radius: 6px;
    box-shadow: 0 7px 19px -1px hsla(240,4%,69%,.3);
    margin: 5px 10px;
    :first-child {
        margin-left: 0;
    }
    height: 40px;
    background: ${props => props.selected ? '#66AC7E' : ''};
    color: ${props => props.selected ? 'white' : ''};
`;

export interface IScrollbarElementProps {
    to: string,
    selected?: boolean,
    displayName: string
    onClick?: () => any
}

const ScrollbarElement = ({ to, ...props }: IScrollbarElementProps) => (
    <StyledScrollbarElement to={ to } {...props.selected}>
        {props.displayName}
    </StyledScrollbarElement>
);

export default ScrollbarElement;
