namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        KAKAO_RESTAPI_KEY: string;
        KAKAO_SECRET: string;
        GITHUB_ID: string;
        GITHUB_SECRET: string;
        GITHUB_APP_ID: string;
        NEXT_PUBLIC_GITHUB_TOKEN: string;
        NEXT_PUBLIC_SECRET: string;
        NEXT_PUBLIC_API_URL: string;
    }
}
