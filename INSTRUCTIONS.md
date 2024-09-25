# Configuration du projet

### 💡 Comprendre la configuration de base

## 📝 Tes notes

Détaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il est important de comprendre la configuration de base d’un projet. Le but ici est de parcourir les configurations dans les grandes lignes afin de comprendre ce qui a été ajouté. 

<aside>
💡 Beaucoup de configurations sont hautement recommandées, d’autres dépendent des préférences des développeurs

</aside>

### VSCode

- `.vscode` : Configuration `VScode` pour ce projet
    - `settings.json` : `formatOnSave` / `ligneNumbers`
    - `extensions.json` : liste d’extensions

### ESLint

- dépendances supplémentaires

```json
"devDependencies": {
    ...
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-github": "^4.10.1",
    "eslint-plugin-json-format": "^2.0.1",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-unicorn": "^50.0.1",
    "prettier": "^3.2.1",
    "prettier-plugin-tailwindcss": "^0.5.11"
}
```

- `.eslintrc.json` : semi : false

<aside>
💡 Il faut souvent redémarrer `vscode` ou `ESLint` serveur après chaque changement de configuration

</aside>

### Prettier

- `prettier.config.cjs` : semi : false

### TSConfig

- alias avec

```
"paths": {
      "@/*": ["./src/*"]
    }
```

### Next Config

- `next.config.mjs`

📑 Le liens vers la doc [https://nextjs.org/docs/app/api-reference/next-config-js](https://nextjs.org/docs/app/api-reference/next-config-js)

### Script

- Pour exécuter le `linter` ou `prettier` via CLI nous avons ajouté les script suivants :

```json
//package.json

"lint": "next lint",
"format": "prettier . --check",
"format:fix": "prettier . --write"
```

## Exercice

- Exécuter la commande permettant de lancer le `linter`
- Exécuter la commande permettant de lancer le `prettier`
- Exécuter la commande permettant de lancer le `prettier` avec les corrections

## Aller plus loin

📑 Le liens vers la doc [https://nextjs.org/docs/app/api-reference/next-config-js](https://nextjs.org/docs/app/api-reference/next-config-js)

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=01.Les%20Fondamentaux&entry.533578441=01%20Configuration).