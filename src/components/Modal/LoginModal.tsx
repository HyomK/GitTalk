import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import css from "styled-jsx/css";
import colors from "@/src/pages/styles/themes/colors";
import ModalLayout from "../layouts/ModalLayout";

import BackIcon from "@/public/image/Back.svg";
import KakaoIcon from "@/public/image/kakaoLogin.svg";
import GithubIcon from "@/public/image/github.png";
import Checked from "@/public/image/checked.svg";
import Unhecked from "@/public/image/unchecked.svg";
import Image from "next/image";

interface ModalProps {
    openModal?: () => void;
    closeModal?: () => void;
    isOpen: boolean;
    children?: ReactNode;
}

const Modal = (props: ModalProps) => {
    const { openModal, closeModal, isOpen } = props;
    return (
        <ModalLayout open={isOpen}>
            <StyledModal open={isOpen}>
                <div className="login-container">
                    <div className="back-btn" onClick={closeModal}>
                        <Image src={BackIcon} height={20} width={20} />
                    </div>
                    <div className="login-wrapper">
                        <div className="kakao-btn">
                            <Image src={KakaoIcon} layout="responsive" />
                        </div>
                        <div style={{ width: "25px" }}>
                            <Image src={Checked} layout="responsive" />
                        </div>
                    </div>
                    <div className="login-wrapper">
                        <div className="github-btn">
                            <div className="github-icon">
                                <Image
                                    layout="responsive"
                                    src={GithubIcon}
                                    height={20}
                                    width={20}
                                />
                            </div>
                            <p>Log in with GitHub</p>
                        </div>
                        <div style={{ width: "25px", alignSelf: "center" }}>
                            <Image src={Checked} layout="responsive" />
                        </div>
                    </div>
                    <h1>Get Start!</h1>
                    <style jsx>{`
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
                        .login-wrapper:hover {
                            filter: brightness(0.6);
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
                        .github-icon {
                            width: 20px;
                            height: 100%;
                            float: left;
                            margin-right: 20px;
                            align-self: center;
                            padding: 0;
                        }
                        h1 {
                            align-self: center;
                            font-size: 2rem;
                            font-weight: 500;
                            margin: 1rem;
                        }
                    `}</style>
                </div>
            </StyledModal>
        </ModalLayout>
    );
};

export default Modal;

const StyledModal = styled.div<{ open: boolean }>`
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
