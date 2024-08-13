import Link from "next/link";

export default function Header() {
    return (
        <div>
        <Link href="/">home</Link>
        <Link href="/performance">performance</Link>
        <Link href="/reliability">reliability</Link>
        <Link href="/scale">scale</Link>
      </div>
    )
}