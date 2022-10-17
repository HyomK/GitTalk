import { instance } from "./api";

export interface IGithubProfile {
    id: number;
    name: string | null;
    login: string;
    profileImg: string;
}

export const getProfile = async () => {
    const user = localStorage.getItem(
        "persist:recoil@recoil@github-user-state"
    );
    const data = user ? JSON.parse(user) : null;
    if (data === null) return null;

    const octokit = await instance();

    return await octokit
        .request("GET /users/{username}", {
            username: data.login,
        })
        .then((res) => {
            const data: IGithubProfile = {
                id: res.data.id,
                name: res.data.name,
                login: res.data.login,
                profileImg: res.data.avatar_url,
            };
            return data;
        })
        .catch((e) => console.log(e));
};
