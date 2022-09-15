/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { LoginModalStyle, StyledModal } from "./LoginModal.style";
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
            <StyledModal open={isOpen} css={LoginModalStyle}>
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
                </div>
            </StyledModal>
        </ModalLayout>
    );
};

export default Modal;
