import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
        <Link href="/" className="text-2xl font-black tracking-tight text-[#102A43]">
          ARUS<span className="text-[#1769D2]">MEDIA</span>
        </Link>
        <Link href="/admin/login" className="text-sm font-semibold text-slate-600 hover:text-[#1769D2]">
          Admin
        </Link>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1769D2]">
          News · Information · Perspective
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#102A43] sm:text-6xl">
          Mengikuti arus informasi, memahami dunia.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          ArusMedia sedang mempersiapkan ruang informasi digital yang menyajikan
          perkembangan Indonesia dan dunia secara aktual dan informatif.
        </p>
        <div className="mt-10 inline-flex rounded-lg bg-[#1769D2] px-5 py-3 text-sm font-semibold text-white">
          Segera hadir
        </div>
      </section>
      <footer className="border-t border-slate-100 px-5 py-7 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ArusMedia. Semua hak dilindungi.
      </footer>
    </main>
  );
}
