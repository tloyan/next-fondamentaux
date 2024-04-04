import Link from 'next/link'
import clsx from 'clsx'
import styles from './page.module.css'

const Page = () => {
  const idAdmin = Math.random() > 0.5
  return (
    <div>
      <p className={clsx(styles.title, {'text-red-500': idAdmin})}>
        Je suis un développeur FullStack Next
      </p>
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
