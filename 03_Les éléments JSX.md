# Cours sur les Composants Fonctionnels en React

## Introduction

Les composants fonctionnels sont l'un des piliers fondamentaux de React. Ils permettent de diviser votre interface utilisateur en morceaux réutilisables et autonomes. Dans ce cours, nous allons explorer ce qu'est un composant fonctionnel en React, comment en créer un, et comment les utiliser dans d'autres composants.

## Table des matières

1. [Introduction aux Composants Fonctionnels](#introduction-aux-composants-fonctionnels)
2. [Création d'un Composant Fonctionnel](#création-dun-composant-fonctionnel)
3. [Utilisation de Composants Fonctionnels](#utilisation-de-composants-fonctionnels)
4. [Passage de Propriétés](#passage-de-propriétés)
5. [Composition de Composants](#composition-de-composants)
6. [Avantages des Composants Fonctionnels](#avantages-des-composants-fonctionnels)
7. [Conclusion](#conclusion)

## 1. Introduction aux Composants Fonctionnels

Les composants fonctionnels sont des fonctions JavaScript qui retournent un élément React. Ils sont souvent utilisés pour créer des éléments d'interface utilisateur simples et réutilisables.

## 2. Création d'un Composant Fonctionnel

Pour créer un composant fonctionnel en React, il vous suffit de définir une fonction qui renvoie un élément React. Voici un exemple simple :

```jsx
// Exemple de composant fonctionnel
import React from "react";

function MonComposant() {
  return <div>Contenu du composant</div>;
}
```

## 3. Utilisation de Composants Fonctionnels

Une fois que vous avez créé un composant fonctionnel, vous pouvez l'utiliser dans d'autres composants en l'important et en l'appelant comme une balise HTML.

```jsx
// Utilisation d'un composant fonctionnel dans un autre composant
import React from "react";
import MonComposant from "./MonComposant";

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <MonComposant />
    </div>
  );
}
```

## 4. Passage de Propriétés

Vous pouvez également passer des propriétés (props) à un composant fonctionnel pour le personnaliser. Les props sont des arguments que vous pouvez utiliser à l'intérieur du composant.

```jsx
// Passage de propriétés à un composant fonctionnel
import React from "react";

function MonComposantPersonnalisé(props) {
  return <div>Bienvenue, {props.nom} !</div>;
}
```

```jsx
// Utilisation du composant personnalisé avec des props
import React from "react";
import MonComposantPersonnalisé from "./MonComposantPersonnalisé";

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <MonComposantPersonnalisé nom="Alice" />
      <MonComposantPersonnalisé nom="Bob" />
    </div>
  );
}
```

## 5. Composition de Composants

En React, vous pouvez composer des composants en les imbriquant les uns dans les autres pour créer des interfaces utilisateur complexes.

```jsx
// Composition de composants
import React from "react";

function Bouton({ couleur, libelle }) {
  return <button style={{ backgroundColor: couleur }}>{libelle}</button>;
}

function App() {
  return (
    <div>
      <h1>Mon Application</h1>
      <Bouton couleur="red" libelle="Clic Rouge" />
      <Bouton couleur="blue" libelle="Clic Bleu" />
    </div>
  );
}
```

## 6. Avantages des Composants Fonctionnels

- **Simplicité :** Les composants fonctionnels sont simples à comprendre et à créer.
- **Réutilisabilité :** Vous pouvez réutiliser des composants fonctionnels dans toute votre application.
- **Facilité de test :** Les composants fonctionnels sont faciles à tester grâce à leur nature pure.

## 7. Conclusion

Les composants fonctionnels sont l'une des bases de React et sont largement utilisés pour créer des interfaces utilisateur réactives. En comprenant comment créer, utiliser et person
