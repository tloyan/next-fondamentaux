// 🐶 Importe le composant `Link` de `Next`
// 🤖 import Link from 'next/link'
const Page = () => {
  return (
    <div>
      <p>Je suis un développeur FullStack Next</p>
      {/* ⛏️ Supprime la balise `<a>` et remplace la par le composant `<Link>`  */}
      <a href="/exercise/account">Account</a>
    </div>
  )
}

export default Page
