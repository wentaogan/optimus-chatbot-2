import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    return redirect('/')
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="w-full max-w-md">
        {children}
      </main>
    </div>
  );
}
