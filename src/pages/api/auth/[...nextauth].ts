import NextAuth, { Session } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";
import { useRecoilValue } from "recoil";
import { userAgent } from "next/server";

export default NextAuth({
    secret: process.env.NEXT_PUBLIC_SECRET,
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_RESTAPI_KEY!,
            clientSecret: process.env.KAKAO_SECRET!,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    pages: {
        signIn: "/",
    },
    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },

    callbacks: {
        jwt: async ({ token, user, profile }) => {
            if (user && profile && Object.keys(profile).includes("login")) {
                user.login = profile.login as string;
            }
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
});
