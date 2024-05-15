# Mise en place de l'environnement de développement avec Vite.js

## Introduction

Vite.js est un outil de développement léger et rapide pour la création d'applications web modernes en JavaScript et TypeScript. Il offre une configuration zéro et une expérience de développement rapide, ce qui en fait un choix populaire parmi les développeurs web. Dans ce cours, nous allons explorer comment mettre en place un environnement de développement avec Vite.js pour créer des applications web performantes.

## Table des matières

1. [Introduction à Vite.js](#introduction-à-vitejs)
2. [Installation de Node.js](#installation-de-nodejs)
3. [Création d'un Projet Vite](#création-dun-projet-vite)
4. [Structure du Projet](#structure-du-projet)
5. [Exécution du Projet](#exécution-du-projet)
6. [Gestion des Dépendances](#gestion-des-dépendances)
7. [Configuration Personnalisée](#configuration-personnalisée)
8. [Dépannage et erreurs courantes](#dépannage-et-erreurs-courantes)
9. [Documentation complémentaire](#documentation-complémentaire)
10. [Conclusion](#conclusion)

## 1. Introduction à Vite.js

Vite.js est un outil de développement rapide qui prend en charge JavaScript, TypeScript, Vue.js, React et d'autres frameworks. Il propose une configuration zéro par défaut, ce qui signifie que vous pouvez commencer à coder immédiatement sans vous soucier de la configuration initiale.

## 2. Installation de Node.js

Avant de commencer à utiliser Vite.js, assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le télécharger depuis le site officiel de Node.js : [https://nodejs.org/](https://nodejs.org/).

## 3. Création d'un Projet Vite

Pour créer un nouveau projet Vite, vous pouvez utiliser l'outil de ligne de commande Vite. Tout d'abord, installez Vite de manière globale en exécutant la commande suivante :

```bash
npm install -g create-vite
```

Ensuite, créez un nouveau projet Vite en spécifiant le nom du projet et le template souhaité. Par exemple, pour créer un projet React, vous pouvez exécuter :

```bash
create-vite mon-projet --template react
```

Cela créera un nouveau répertoire appelé `mon-projet` avec une configuration Vite prête à l'emploi.

## 4. Structure du Projet

La structure de base d'un projet Vite est la suivante :

```
mon-projet/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  ├── src/
  │   ├── main.js
  ├── package.json
  ├── vite.config.js
```

- Le dossier `public` contient le fichier HTML principal de votre application.
- Le dossier `src` est l'endroit où vous développerez votre code JavaScript ou TypeScript.
- `package.json` contient les dépendances de votre projet.
- `vite.config.js` est le fichier de configuration personnalisé de Vite.

## 5. Exécution du Projet

Pour exécuter votre projet Vite, utilisez la commande suivante à partir du répertoire du projet :

```bash
npm run dev
```

Cela lancera un serveur de développement local et ouvrira votre application dans le navigateur par défaut.

## 6. Gestion des Dépendances

Vous pouvez ajouter des dépendances à votre projet en utilisant la commande `npm install` ou `yarn add`. Par exemple, pour ajouter une dépendance React, vous pouvez exécuter :

```bash
npm install react
```

Vite.js gère automatiquement les dépendances et les importations dans votre code.

## 7. Configuration Personnalisée

Si vous avez besoin de personnaliser la configuration de Vite, vous pouvez le faire en modifiant le fichier `vite.config.js`. Vous pouvez configurer des plugins, des alias, des options de compilation, et bien plus encore.

### Exemple de configuration personnalisée

Voici un exemple de configuration personnalisée pour Vite.js :

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

Dans cet exemple, nous avons ajouté le plugin React, défini un alias pour le dossier `src`, et configuré le serveur de développement pour s'ouvrir automatiquement sur le port 3000.

### Plugins utiles

Vous pouvez étendre les fonctionnalités de Vite en utilisant des plugins. Voici quelques plugins couramment utilisés :

- `@vitejs/plugin-vue` : Pour les projets Vue.js.
- `vite-plugin-eslint` : Pour l'intégration de ESLint.
- `vite-plugin-svgr` : Pour importer des fichiers SVG comme des composants React.

Pour ajouter un plugin, installez-le via npm et ajoutez-le à la section `plugins` de votre `vite.config.js`.

## 8. Dépannage et erreurs courantes

Lors de l'utilisation de Vite.js, vous pouvez rencontrer certaines erreurs courantes. Voici quelques-unes des plus fréquentes et comment les résoudre :

### Problème : Erreur "command not found: create-vite"

**Solution** : Assurez-vous que vous avez installé Vite globalement avec `npm install -g create-vite`. Si le problème persiste, essayez d'ajouter le chemin npm global à votre PATH.

### Problème : Port déjà en use

**Solution** : Si le port par défaut (3000) est déjà utilisé, vous pouvez changer le port dans la configuration de Vite.

```js
// vite.config.js
export default {
  server: {
    port: 4000,
  },
};
```

### Problème : Dépendance non trouvée

**Solution** : Assurez-vous que toutes les dépendances sont correctement installées en exécutant `npm install` ou `yarn install`. Si le problème persiste, vérifiez le chemin d'importation des modules.

### Problème : Erreurs de compilation

**Solution** : Vérifiez les messages d'erreur pour des indications sur ce qui ne va pas. Parfois, des erreurs de syntaxe ou des problèmes de compatibilité de version peuvent causer des échecs de compilation.

### Outils de débogage

1. **Console du navigateur** : Utilisez la console pour afficher les erreurs et les avertissements.
2. **Outils de développement React** : Les outils de développement React pour Chrome ou Firefox peuvent aider à inspecter l'état et les props des composants React.

## 9. Documentation complémentaire

Pour en savoir plus sur Vite.js et explorer ses fonctionnalités avancées, consultez la documentation officielle :

- [Documentation Vite.js](https://vitejs.dev/guide/)
- [Documentation React](https://reactjs.org/docs/getting-started.html)
- [Documentation Node.js](https://nodejs.org/en/docs/)

## 10. Conclusion

Vite.js est un outil de développement web rapide et puissant qui facilite la création d'applications modernes en JavaScript et TypeScript. En suivant ce guide, vous avez appris à mettre en place un environnement de développement avec Vite.js et à commencer à créer des projets web performants.

C'est la fin de ce cours sur la mise en place de l'environnement de développement avec Vite.js. J'espère que vous êtes maintenant prêt à explorer davantage Vite.js et à créer des applications web exceptionnelles.

---
