import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import colors from "@/src/themes/colors";

export const loginDiv = css`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${colors.white};
    box-shadow: 0px 38px 36px rgba(0, 0, 0, 0.1),
        0px 24.6296px 21.0833px rgba(0, 0, 0, 0.0759259),
        0px 14.637px 11.4667px rgba(0, 0, 0, 0.0607407),
        0px 7.6px 5.85px rgba(0, 0, 0, 0.05),
        0px 3.0963px 2.93333px rgba(0, 0, 0, 0.0392593),
        0px 0.703704px 1.41667px rgba(0, 0, 0, 0.0240741);
    label: "loginDiv";
    h1 {
        font-size: 2rem;
        color: ${colors.black30};
        text-align: center;
        padding: 5rem 0;
    }
`;

export const LoginBoxContainer = styled.section`
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 3rem 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    background-color: ${colors.white};
    box-shadow: 0px 38px 36px rgba(0, 0, 0, 0.1),
        0px 24.6296px 21.0833px rgba(0, 0, 0, 0.0759259),
        0px 14.637px 11.4667px rgba(0, 0, 0, 0.0607407),
        0px 7.6px 5.85px rgba(0, 0, 0, 0.05),
        0px 3.0963px 2.93333px rgba(0, 0, 0, 0.0392593),
        0px 0.703704px 1.41667px rgba(0, 0, 0, 0.0240741);

    h1 {
        font-size: 2rem;
        color: ${colors.black30};
        text-align: center;
        padding: 5rem 0;
    }
`;
