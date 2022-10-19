/** @jsxImportSource @emotion/react */
import colors from "@/src/pages/styles/themes/colors";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledModal = styled.div<{ open: boolean }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    padding: 2rem 2rem 2.2rem 2rem;
    border-radius: 12px;
    background-color: ${(p) => colors.white};

    ${(p) => !p.open && `display:none;`}
`;

export const LoginModalStyle = css`
    .login-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
    .login-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 0;
        gap: 1.2rem;
        align-items: center;
    }

    .back-btn {
        float: left;
        width: 20px;
    }
    .back-btn:hover {
        opacity: 0.5;
    }
    .kakao-btn {
        width: 50%;
        align-self: center;
    }
    .kakao-btn:hover {
        filter: brightness(0.6);
    }
    .github-btn {
        background-color: black;
        width: 50%;
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: white;
        border-radius: 3px;
        padding: 7px;
        font-size: 1.3rem;
    }
    .github-btn:hover {
        filter: brightness(0.6);
    }
    .github-icon {
        width: 20px;
        height: 100%;
        float: left;
        margin-right: 20px;
        align-self: center;
        padding: 0;
    }
    button {
        align-self: center;
        font-size: 2rem;
        font-weight: 500;
        margin: 1rem;
    }
`;
