import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    padding: 20px 12px;
    border-radius: 16px;
    background: #292c2d;
    max-width: 300px;
    min-width: 200px;
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 10px 4px #1d1d1d;
    }
`;
