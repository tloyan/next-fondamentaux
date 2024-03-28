import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Page Account</h1>
      <Link href="/exercise/account/details" scroll={false}>
        Page de detail du compte
      </Link>
    </div>
  )
}
