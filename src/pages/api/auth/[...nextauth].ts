import NextAuth, { Session } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import GitHubProvider from "next-auth/providers/github";
import { useRecoilValue } from "recoil";

export default NextAuth({
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
        jwt: async ({ token, user }) => {
            user && (token.user = user);
            return token;
        },
        session: async ({ session, token }) => {
            session.user = token.user;
            return session;
        },
    },
});
