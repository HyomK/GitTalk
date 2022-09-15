import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { LoginBoxContainer, LoginWrapper } from "./LoginContainer.style";

import Logo from "@/public/image/Logo.svg";
import LogoLabel from "@/public/image/GitTalk.svg";

import Button from "@/src/components/button";
import Modal from "../Modal/LoginModal";

const LoginContainer = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <LoginBoxContainer>
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
                        <Image src={Logo} />
                        <Image src={LogoLabel} />
                        <h1>카톡으로 작업 내용을 쉽게 알리자!</h1>
                        <Button
                            selected={false}
                            onClick={() => setModalOpen(true)}
                        >
                            Login
                        </Button>
                    </LoginWrapper>
                </motion.div>
            </LoginBoxContainer>
            {isModalOpen ? (
                <Modal
                    openModal={() => setModalOpen(true)}
                    closeModal={() => setModalOpen(false)}
                    isOpen={isModalOpen}
                >
                    <h1>hello</h1>
                </Modal>
            ) : null}
        </>
    );
};

export default LoginContainer;
