import Link from "next/link";


export function Navigation({ to }: { to: string }) {
  return (
    <Link href={to}>
      <div className="w-xl bg-red-200" >
      </div>
    </Link>
  )
}

