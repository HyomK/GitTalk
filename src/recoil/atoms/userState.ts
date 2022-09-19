import { atom, DefaultValue, selector } from "recoil";
import persistRecoilEffect from "../effects/persist";

interface IUserState {
    isKakaoLogined: boolean | undefined;
    isGithubLogined: boolean | undefined;
}

interface UserKakao {
    id: number | string;
    name: string;
}

interface UserGithub {
    id: number | string;
    name: string;
    email: string;
    image?: string | undefined;
}

export const $userState = atom<IUserState>({
    key: "recoil@user-state-atom",
    default: { isKakaoLogined: false, isGithubLogined: false },
    effects: [persistRecoilEffect({ recoilAtomKey: "recoil@user-state" })],
});

export const $kakaoInfo = atom<UserKakao | null>({
    key: "recoil@kakao-user-state-atom",
    default: null,
    effects: [
        persistRecoilEffect({ recoilAtomKey: "recoil@kakao-user-state" }),
    ],
});

export const $githubInfo = atom<UserGithub | null>({
    key: "recoil@github-user-state-atom",
    default: null,
    effects: [
        persistRecoilEffect({ recoilAtomKey: "recoil@github-user-state" }),
    ],
});

export const $kakoState = selector({
    key: "recoil@Kakao-selector",
    get: ({ get }) => {
        const state = get($userState);
        return state?.isKakaoLogined;
    },
    set: ({ set, get }, newValue) => {
        const state = get($userState);
        set($userState, {
            isKakaoLogined: newValue instanceof DefaultValue ? false : newValue,
            isGithubLogined: state.isGithubLogined,
        });
    },
});

export const $githubState = selector({
    key: "recoil@Github-selector",
    get: ({ get }) => {
        const state = get($userState);
        return state?.isGithubLogined;
    },
    set: ({ set, get }, newValue) => {
        const state = get($userState);

        set($userState, {
            isKakaoLogined: state.isKakaoLogined,
            isGithubLogined:
                newValue instanceof DefaultValue ? false : newValue,
        });
    },
});

export const $loginState = selector({
    key: "recoil@login-selector",
    get: ({ get }) => {
        const state = get($userState);

        if (state.isKakaoLogined && !state.isGithubLogined)
            return "kakaoSigned";
        else if (state.isGithubLogined && !state.isKakaoLogined)
            return "githubSigned";
        else if (state.isGithubLogined && state.isKakaoLogined)
            return "logined";
        else return "none";
    },
});

export default $userState;
