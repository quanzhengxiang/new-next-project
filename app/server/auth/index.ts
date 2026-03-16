import { db } from "@/app/server/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import  { AuthOptions, getServerSession as nextAuthGetServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions:AuthOptions ={
    adapter: DrizzleAdapter(db), 
    providers: [
        GithubProvider({
            clientId:'Ov23li0D3bvAPNwbXDgm',
            clientSecret:'8f4853f542475eb1ed75d137a1d5f7cda24d8ed1',
            allowDangerousEmailAccountLinking: true,
        })
    ],
}

export function getServerSession(){
return nextAuthGetServerSession(authOptions)
}