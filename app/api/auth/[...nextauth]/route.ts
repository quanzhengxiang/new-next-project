import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions ={
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
 
                if (credentials?.username !== 'quanzhengxiang') {
                  return null
                }
 
                // return user object with their profile data
                return credentials.username
            }
        })
    ],
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }