"use client"

const Page = () => {
  // 🐶 Détermine dans quel environnement s'exécute ce composant grâce à un log
  // 🤖 `console.log('Je suis un développeur FullStack Next')`
  //
  // 🐶 Vérifie dans la console du navigateur et dans la console du serveur (terminal)

  // 🐶 N'oublie pas de faire les exercices bonus
  console.log("Je suis un developpeur FullStack Next")
  return (
    <div onClick={() => alert("Hello")}>
      <p>Je suis un développeur FullStack Next</p>
    </div>
  )
}

export default Page
