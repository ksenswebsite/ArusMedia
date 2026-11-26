import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f5f8fc] px-5">
      <div className="max-w-md text-center">
        <p className="text-sm font-bold text-[#1769D2]">404</p>
        <h1 className="mt-2 text-3xl font-black text-[#102A43]">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-slate-600">Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p>
        <Link href="/" className="mt-7 inline-flex rounded-lg bg-[#1769D2] px-5 py-3 text-sm font-semibold text-white">
          Kembali ke beranda
        </Link>
      </div>
    </main>
  );
}
