import Link from "next/link";

export default function Breadcrumb({ current }: { current?: string }) {
  return (
    <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        {current ? (
          <>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">{current}</span>
            </li>
          </>
        ) : (
          <li>
            <span aria-current="page">Blog</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
