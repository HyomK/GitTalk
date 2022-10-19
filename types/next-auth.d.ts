import "next-auth";

declare module "next-auth" {
    interface User {
        id: number;
        login?: string | null;
    }

    interface Session {
        user: User & DefaultSession["user"];
    }
}
