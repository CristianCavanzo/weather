import styled from 'styled-components';

export const HomeStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    .home__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .home__date {
        font-size: 1.4rem;
        font-weight: 600;
    }
    .home__header-location {
        display: flex;
        align-items: center;
        column-gap: 2px;
    }
    .home__weather-temp {
        font-size: 14rem;
        line-height: 11rem;
        font-weight: bold;
    }
    .home__header-icon {
        display: flex;
        align-items: center;
        column-gap: 8px;
    }
    .recommeded_places {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }
`;
