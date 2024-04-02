import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <p className="title">Je suis un développeur FullStack Next</p>
      <div className="mt-4">
        <Link
          className="rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-100"
          href="/exercise/account"
        >
          Account
        </Link>
      </div>
    </div>
  )
}

export default Page
