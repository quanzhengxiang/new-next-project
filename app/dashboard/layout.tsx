import { redirect } from "next/navigation";
import { getServerSession } from "../server/auth";

export default async function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log(123, session);
  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return (
     <>
       {children}
     </>
  );
}
