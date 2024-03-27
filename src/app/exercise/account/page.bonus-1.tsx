import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Page Account</h1>
      <div className="absolute top-[2000px] w-full p-5 text-center">
        <Link href="/exercise/account/details" scroll={false}>
          Page de detail du compte
        </Link>
      </div>
    </div>
  )
}
