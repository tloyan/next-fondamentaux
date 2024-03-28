import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Page Detail du compte</h1>
      <Link href="/exercise/account" scroll={false}>
        Page Account
      </Link>
    </div>
  )
}
