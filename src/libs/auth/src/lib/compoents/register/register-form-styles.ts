import styled from "styled-components";

export const FormHeader = styled.p`
    text-align: center;
    font-size: 25px;
    font-family: Rubik Mono One, sans-serif;
`;

export const FieldBlock = styled.div`
    width: 100%;
    box-shadow: 0 1px 6px 1px rgba(0,0,0,0.09);
    border-radius: 12px;
    overflow: hidden;
    margin-top: 20px;
`;

export const StyledField = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const StyledFieldMessage = styled.p`
    display: block;
    width: 100%;
    padding: 5px 20px;
    color: #eb6565;
    font-size: 12px;
`;

export const StyledFieldInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    padding: 5px 20px;
`;
