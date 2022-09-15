import LoginContainer from "@/src/components/containers/LoginContainer";
import type { NextPage } from "next";

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
