import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import React, { ReactNode, useRef } from "react";

interface ModalLayoutProps {
    open: boolean;
    children: ReactNode;
}

const StyledContainer = styled.div<{ open: Boolean }>`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    z-index: 101;

    overflow: hidden;
    z-index: 100;
`;

export const fadeIn = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity:1;
  }

  to {
    opacity:0;
  }
`;

const StyledDim = styled.div<{ open: boolean }>`
    width: 100%;
    height: 100%;

    background-color: rgba(51, 51, 51, 0.8);
    z-index: 100;
    ${(p) =>
        css`
            animation: ${p.open ? fadeIn : fadeOut} 0.3s forwards;
        `};
`;

const ModalLayout = ({ open, children }: ModalLayoutProps) => {
    const dimRef = useRef<HTMLDivElement>(null);
    return (
        <StyledContainer open={open}>
            <StyledDim ref={dimRef} open={open} />
            {children}
        </StyledContainer>
    );
};

export default ModalLayout;
