import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "./server/db/db";
import { users } from "./server/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  // const users = await db.query.users.findMany();
  const userTable = await db.select().from(users).where(eq(users.name, "quanzhengxiang"));
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-md flex flex-col gap-4">
        <Input name="name" ></Input>
        <div>{userTable?.map((user) => user.name)}</div>
        <Textarea name="description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
