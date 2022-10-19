/** @jsxImportSource @emotion/react */
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { LoginModalStyle, StyledModal } from "./LoginModal.style";
import ModalLayout from "../layouts/ModalLayout";

import BackIcon from "@/public/image/Back.svg";
import KakaoIcon from "@/public/image/kakaoLogin.svg";
import GithubIcon from "@/public/image/github.png";
import Checked from "@/public/image/checked.svg";
import Unchecked from "@/public/image/unchecked.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

import $userState, {
    $kakoState,
    $githubState,
    $loginState,
} from "@/src/recoil/atoms/userState";

interface ModalProps {
    openModal?: () => void;
    closeModal?: () => void;
    isOpen: boolean;
    children?: ReactNode;
}

const LoginModal = (props: ModalProps) => {
    const { openModal, closeModal, isOpen } = props;
    const router = useRouter();

    const resetInitState = useResetRecoilState($userState);
    const loginState = useRecoilValue($loginState);
    const [githubSigned, setGithubSigned] = useRecoilState($githubState);
    const [kakaoState, setKakaoSigned] = useRecoilState($kakoState);
    return (
        <ModalLayout open={isOpen}>
            <StyledModal open={isOpen} css={LoginModalStyle}>
                <div className="login-container">
                    <div className="back-btn" onClick={closeModal}>
                        <Image src={BackIcon} height={20} width={20} alt="" />
                    </div>
                    <div className="login-wrapper">
                        <div
                            className="kakao-btn"
                            onClick={() => {
                                signIn("kakao", {
                                    //callbackUrl: `${window.location.origin}/gitTalk`,
                                }).then((res) => {
                                    setKakaoSigned(true);
                                });
                            }}
                        >
                            <Image src={KakaoIcon} layout="responsive" alt="" />
                        </div>
                        <div style={{ width: "25px" }}>
                            <Image
                                src={kakaoState ? Checked : Unchecked}
                                layout="responsive"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="login-wrapper">
                        <div
                            className="github-btn"
                            onClick={() =>
                                signIn("github").then((res) => {
                                    setGithubSigned(true);
                                })
                            }
                        >
                            <div className="github-icon">
                                <Image
                                    layout="responsive"
                                    src={GithubIcon}
                                    height={20}
                                    width={20}
                                    alt=""
                                />
                            </div>
                            <p>Log in with GitHub</p>
                        </div>
                        <div style={{ width: "25px", alignSelf: "center" }}>
                            <Image
                                src={githubSigned ? Checked : Unchecked}
                                layout="responsive"
                                alt=""
                            />
                        </div>
                    </div>
                    <button
                        disabled={loginState !== "logined"}
                        onClick={() => {
                            router.push("/gitTalk");
                            resetInitState();
                        }}
                    >
                        Get Start!
                    </button>
                </div>
            </StyledModal>
        </ModalLayout>
    );
};

export default LoginModal;
