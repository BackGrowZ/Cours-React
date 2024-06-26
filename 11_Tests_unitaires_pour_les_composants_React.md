# Tests unitaires pour les composants React

## Introduction

Les tests unitaires sont essentiels pour garantir que votre code React fonctionne comme prévu et continue de fonctionner au fil du temps. Ils jouent un rôle clé dans la qualité, la robustesse et la maintenabilité de votre application. Dans ce cours, nous allons explorer l'importance des tests unitaires pour les composants React et comment les écrire à l'aide de bibliothèques comme Jest et React Testing Library.

## Table des matières

1. [Introduction aux tests unitaires](#introduction-aux-tests-unitaires)
2. [Écrire des tests avec Jest](#écrire-des-tests-avec-jest)
3. [Tests avec React Testing Library](#tests-avec-react-testing-library)
4. [Exemple de test unitaire](#exemple-de-test-unitaire)
5. [Dépannage et erreurs courantes](#dépannage-et-erreurs-courantes)
6. [Conclusion](#conclusion)

## 1. Introduction aux tests unitaires

### 1.1 L'importance des tests unitaires

Les tests unitaires sont essentiels pour garantir que votre code React fonctionne comme prévu et continue de fonctionner au fil du temps. Ils jouent un rôle clé dans la qualité, la robustesse et la maintenabilité de votre application.

### 1.2 Outils de test en React

En React, deux outils de test populaires sont largement utilisés : Jest et React Testing Library. Jest est un framework de test JavaScript puissant qui fournit un ensemble complet d'outils pour écrire, exécuter et surveiller vos tests. React Testing Library est une bibliothèque conçue spécifiquement pour tester des composants React en simulant le comportement d'un utilisateur interagissant avec votre application.

## 2. Écrire des tests avec Jest

### 2.1 Configuration de Jest

Pour commencer à utiliser Jest dans votre projet React, vous devez d'abord l'installer. Vous pouvez le faire en exécutant la commande suivante :

```bash
npm install --save-dev jest
```

Une fois Jest installé, vous pouvez créer un fichier de configuration de test (`jest.config.js`) pour spécifier comment Jest devrait fonctionner dans votre projet.

### 2.2 Écriture de tests

Jest vous permet d'écrire des tests en utilisant des suites de tests (`describe`) et des cas de test (`it`). Les suites de tests vous permettent d'organiser vos tests en groupes logiques, tandis que les cas de test contiennent le code de test réel.

Voici un exemple de test Jest :

```javascript
describe("MonComposant", () => {
  it("devrait afficher un message", () => {
    expect(true).toBe(true);
  });
});
```

Dans cet exemple, nous avons une suite de tests nommée `MonComposant` avec un cas de test qui vérifie si `true` est égal à `true`.

## 3. Tests avec React Testing Library

### 3.1 Introduction à React Testing Library

React Testing Library est une bibliothèque qui simplifie le test des composants React en simulant le comportement d'un utilisateur interagissant avec votre application. Elle est conçue pour encourager des tests axés sur le comportement de l'utilisateur plutôt que sur l'implémentation interne.

### 3.2 Écriture de tests avec React Testing Library

Avec React Testing Library, vous pouvez rendre vos composants dans un environnement de test simulé et interagir avec eux pour vérifier leur comportement. Voici un exemple de test avec React Testing Library :

```javascript
import { render, screen } from "@testing-library/react";
import MonComposant from "./MonComposant";

test("affiche un message", () => {
  render(<MonComposant />);
  const message = screen.getByText("Bonjour, monde !");
  expect(message).toBeInTheDocument();
});
```

Dans cet exemple, nous rendons le composant `MonComposant`, puis nous recherchons le texte "Bonjour, monde !" dans le rendu et nous nous attendons à ce qu'il soit présent dans le document.

## 4. Exemple de test unitaire

### 4.1 Exemple de composant et de test

Pour mettre en pratique ce que nous avons appris, créons un exemple concret en écrivant un test unitaire pour un composant React simple. Nous allons utiliser Jest et React Testing Library pour cela.

Voici le composant que nous allons tester, nommé `Compteur` :

```javascript
// Compteur.js
import React, { useState } from "react";

function Compteur() {
  const [compteur, setCompteur] = useState(0);

  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <p>Compteur : {compteur}</p>
      <button onClick={incrementer}>Incrémenter</button>
    </div>
  );
}

export default Compteur;
```

Et voici le test unitaire correspondant :

```javascript
// Compteur.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Compteur from "./Compteur";

test("affiche le compteur initial", () => {
  render(<Compteur />);
  const compteurElement = screen.getByText("Compteur : 0");
  expect(compteurElement).toBeInTheDocument();
});

test("incrémente le compteur lors du clic sur le bouton", () => {
  render(<Compteur />);

  const bouton = screen.getByText("Incrémenter");
  fireEvent.click(bouton);
  const compteurElement = screen.getByText("Compteur : 1");
  expect(compteurElement).toBeInTheDocument();
});
```

Dans cet exemple, nous avons écrit deux tests : l'un vérifie que le compteur initial est correctement affiché, tandis que l'autre vérifie que le compteur s'incrémente lorsque le bouton est cliqué.

## 5. Dépannage et erreurs courantes

### Erreur : "Jest is not defined"

Cette erreur se produit lorsque vous oubliez d'installer Jest ou de le configurer correctement.

**Solution :** Assurez-vous d'installer Jest et de configurer correctement votre fichier `jest.config.js`.

```bash
npm install --save-dev jest
```

### Erreur : "Unable to find element with text"

Cette erreur se produit lorsque React Testing Library ne peut pas trouver l'élément avec le texte spécifié.

**Solution :** Vérifiez que le texte recherché existe dans le composant rendu et qu'il est correctement orthographié.

```javascript
const message = screen.getByText("Bonjour, monde !");
```

### Problème : Tests trop dépendants de l'implémentation

Si vos tests sont trop dépendants de l'implémentation interne de vos composants, ils peuvent devenir fragiles et difficiles à maintenir.

**Solution :** Écrivez des tests qui se concentrent sur le comportement de l'utilisateur et les résultats observables plutôt que sur les détails d'implémentation internes.

```javascript
test("affiche un message", () => {
  render(<MonComposant />);
  const message = screen.getByText("Bonjour, monde !");
  expect(message).toBeInTheDocument();
});
```

## 6. Conclusion

Les tests unitaires sont un aspect crucial du développement d'applications robustes et fiables. En utilisant Jest et React Testing Library, vous pouvez écrire des tests efficaces pour vos composants React et assurer la qualité et la stabilité de votre code. En pratiquant et en maîtrisant ces outils, vous serez en mesure de développer des applications React plus fiables et maintenables.
