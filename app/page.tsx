import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SessionProvider, UserInfo } from "./UserInfo";
import { getServerSession } from "./server/auth";
import { redirect } from 'next/navigation'

export default async function Home() {
 
  const session = await getServerSession()
  console.log(123,session)
if(!session?.user){
   redirect('/api/auth/signin')
}
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <Input name="name" ></Input>
        <Textarea name="description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
      <SessionProvider>
        <UserInfo />
      </SessionProvider>
    </div>
  );
}
