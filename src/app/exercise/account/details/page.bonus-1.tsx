import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Page Detail du compte</h1>
      <div className="absolute top-[2000px] w-full p-5 text-center">
        <Link href="/exercise/account" scroll={false}>
          Page Account
        </Link>
      </div>
    </div>
  )
}
