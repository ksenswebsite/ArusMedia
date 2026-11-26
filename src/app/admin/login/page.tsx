import { signInAction } from "./actions";

type Props = { searchParams: Promise<{ error?: string }> };

export default async function AdminLoginPage({ searchParams }: Props) {
  const params = await searchParams;
  const message = params.error === "invalid"
    ? "Email atau password tidak valid."
    : params.error === "missing"
      ? "Email dan password wajib diisi."
      : null;

  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f8fc] px-5 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <p className="text-xl font-black tracking-tight text-[#102A43]">
            ARUS<span className="text-[#1769D2]">MEDIA</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Administrator access</p>
        </div>
        <h1 className="text-2xl font-bold text-[#102A43]">Masuk ke dashboard</h1>
        <p className="mt-2 text-sm text-slate-500">Gunakan akun administrator ArusMedia.</p>
        {message && <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{message}</p>}
        <form action={signInAction} className="mt-7 space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Email
            <input name="email" type="email" autoComplete="username" required
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-[#1769D2] focus:ring-2 focus:ring-blue-100" />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input name="password" type="password" autoComplete="current-password" required
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-[#1769D2] focus:ring-2 focus:ring-blue-100" />
          </label>
          <button type="submit" className="w-full rounded-lg bg-[#1769D2] px-4 py-3 font-semibold text-white hover:bg-blue-700">
            Masuk
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">Akses khusus administrator.</p>
      </div>
    </main>
  );
}
