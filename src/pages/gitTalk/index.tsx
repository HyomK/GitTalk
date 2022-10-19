import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { getProfile } from "../api/github/user";
import { IGithubProfile } from "../api/github/user";

import TabList from "@/src/components/tabList/TabList";

const GitTalk = () => {
    const [user, setUser] = useState<IGithubProfile | null | void>(null);

    const initPage = async () => {
        const data = await getProfile();
        setUser(data);
    };

    useEffect(() => {
        initPage();
    }, []);

    return (
        <div>
            <TabList tabItems={["My", "Organization"]} outerActivatedIndex={0}>
                <h1>first</h1>
                <h1>second</h1>
            </TabList>
            <p>hello{user ? user.name : "unknown"}</p>
        </div>
    );
};

export default GitTalk;
