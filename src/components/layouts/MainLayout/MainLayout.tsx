import { ReactNode } from "react";
import styled from "@emotion/styled";

interface MainLayoutProps {
    children: ReactNode;
}

const StyledMain = styled.main`
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`;

const MainLayout = ({ children }: MainLayoutProps) => {
    return <StyledMain>{children}</StyledMain>;
};

export default MainLayout;
