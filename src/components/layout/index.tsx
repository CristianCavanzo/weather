import { NextFont } from 'next/dist/compiled/@next/font';
import React, { Fragment } from 'react';
import styled from 'styled-components';
const Header = styled.header`
    height: 14vh;
    height: 14dvh;
`;
const LayoutComponent = styled.div`
    background: #181a1b;
    min-height: calc(100vh - 14vh);
    min-height: calc(100dvh - 14dvh);
    border-radius: 40px 40px 0 0;
    padding: 16px;
    @media (min-width: 500px) {
        padding: 32px;
    }
`;
interface Props {
    children: React.ReactNode;
    font: NextFont;
}

const Layout = ({ children, font }: Props) => {
    return (
        <Fragment>
            <Header></Header>
            <LayoutComponent className={font.className}>
                {children}
            </LayoutComponent>
        </Fragment>
    );
};

export { Layout };
