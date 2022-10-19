import axios from "axios";
import { getCookie } from "cookies-next";
import { Octokit } from "@octokit/core";
import { createTokenAuth } from "@octokit/auth-token";

export const instance = async () => {
    const auth = createTokenAuth(process.env.NEXT_PUBLIC_GITHUB_TOKEN);
    const authentication = await auth();
    const octokit = new Octokit({
        auth: authentication.token,
        headers: {
            Authorization: `Bearer ${authentication.token}`,
        },
    });

    return octokit;
};
