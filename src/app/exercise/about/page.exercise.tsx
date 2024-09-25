import Link from 'next/link'

const Page = () => {
  return (
    <div>
      {/* 🐶 Applique le style global `.title` sur l'élément <p> */}
      <p>Je suis un développeur FullStack Next</p>
      {/* 🐶 Applique le style `tailwind` sur le composant `<Link>` pour le transformer en bouton*/}
      <Link href="/exercise/account">Account</Link>
      {/* 🐶 Tu peux wrapper d'une `div` avec 'mt-4' pour ajouter un margin top sur le button*/}

      {/* 🐶 Pense à regarder l'exercice bonus*/}
    </div>
  )
}

export default Page
