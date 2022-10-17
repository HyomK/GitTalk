import LoginContainer from "@/src/components/containers/LoginContainer";
import type { NextPage } from "next";
import { getSession } from "next-auth/react";

const Home: NextPage = () => {
    return (
        <>
            <div>
                <LoginContainer />
            </div>
        </>
    );
};

export default Home;
