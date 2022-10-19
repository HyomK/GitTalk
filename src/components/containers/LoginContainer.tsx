import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useResetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { motion, AnimatePresence } from "framer-motion";

import { LoginBoxContainer, LoginWrapper } from "./LoginContainer.style";

import Logo from "public/image/logo.svg";
import LogoLabel from "public/image/GitTalk.svg";

import Button from "src/components/button";
import Modal from "../Modal/LoginModal";

import $userState, {
    $kakaoInfo,
    $githubInfo,
    $loginState,
} from "@/src/recoil/atoms/userState";

const LoginContainer = () => {
    const initState = useRecoilValue($loginState);
    const resetInitState = useResetRecoilState($userState);
    const [kakaoUser, setKakaoUser] = useRecoilState($kakaoInfo);
    const [githubUser, setGithubUser] = useRecoilState($githubInfo);
    const resetKakao = useResetRecoilState($kakaoInfo);
    const [isModalOpen, setModalOpen] = useState(initState !== "none");
    const { data, status } = useSession();

    if (status === "loading") {
        return <></>;
    } else {
        console.log(initState);
        if (initState !== "githubSigned" && kakaoUser == null) {
            if (
                githubUser == null ||
                (githubUser !== null && githubUser.id !== data?.user.id)
            )
                setKakaoUser(data?.user);
        } else if (initState !== "kakaoSigned" && githubUser == null)
            if (
                kakaoUser == null ||
                (kakaoUser !== null && kakaoUser.id !== data?.user.id)
            )
                setGithubUser(data?.user);
    }
    return (
        <>
            <LoginBoxContainer>
                <AnimatePresence
                    initial={initState === "none" || status != "authenticated"}
                >
                    <motion.div
                        className="loginDiv"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            default: {
                                duration: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            },
                            scale: {
                                type: "spring",
                                damping: 4,
                                stiffness: 100,
                                restDelta: 0.001,
                            },
                        }}
                    >
                        <LoginWrapper>
                            <Image src={Logo} alt="" />
                            <Image src={LogoLabel} alt="" />
                            <h1>카톡으로 작업 내용을 쉽게 알리자!</h1>
                            <Button
                                selected={false}
                                onClick={() => setModalOpen(true)}
                            >
                                Login
                            </Button>
                        </LoginWrapper>
                    </motion.div>
                </AnimatePresence>
            </LoginBoxContainer>
            {isModalOpen ||
            (isModalOpen &&
                initState == "none" &&
                status == "authenticated") ? (
                <Modal
                    openModal={() => setModalOpen(true)}
                    closeModal={() => {
                        setModalOpen(false);
                        resetInitState();
                    }}
                    isOpen={
                        isModalOpen ||
                        (initState == "none" && status == "authenticated")
                    }
                ></Modal>
            ) : null}
        </>
    );
};

export default LoginContainer;
