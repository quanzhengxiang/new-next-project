import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-full max-w-xl flex flex-col gap-4">
        <Input name="name" ></Input>
        <Textarea name="description"></Textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
