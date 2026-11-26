import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "./actions";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    await supabase.auth.signOut();
    redirect("/admin/login?error=invalid");
  }

  return (
    <main className="min-h-screen bg-[#f5f8fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <span className="text-xl font-black text-[#102A43]">Arus<span className="text-[#1769D2]">Media.</span></span>
          <form action={signOutAction}>
            <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Keluar
            </button>
          </form>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm font-semibold text-[#1769D2]">ADMINISTRATION</p>
        <h1 className="mt-2 text-3xl font-black text-[#102A43]">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Selamat datang, {profile.display_name}. Fondasi dashboard ArusMedia sudah aktif.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Artikel", "Manajemen artikel akan hadir di Phase 3."],
            ["Kategori", "Pengaturan kategori akan hadir di Phase 3."],
            ["Media Library", "Pengelolaan gambar akan hadir di Phase 3."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="font-bold text-[#102A43]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
