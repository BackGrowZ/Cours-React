### 15 : Gestion des erreurs dans les composants fonctionnels

**Objectif :** Dans cette section, nous aborderons la gestion des erreurs dans les composants fonctionnels de React.

#### 15.1 Gestion des erreurs avec ErrorBoundary

##### 15.1.1 Introduction à ErrorBoundary

Dans React, les composants fonctionnels peuvent être sujets à des erreurs lors de leur exécution. Pour capturer et gérer ces erreurs, vous pouvez utiliser un composant appelé ErrorBoundary. Celui-ci enveloppe les parties du code susceptibles de générer des erreurs et permet d'afficher un message d'erreur convivial à la place d'un plantage complet de l'application.

##### 15.1.2 Utilisation d'ErrorBoundary

Pour utiliser ErrorBoundary, vous devez l'importer depuis une bibliothèque de gestion des erreurs, telle que `react-error-boundary`. Ensuite, vous pouvez l'incorporer dans votre composant comme suit :

```javascript
import { ErrorBoundary } from "react-error-boundary";

function MonComposant() {
  return (
    <div>
      <h1>Mon composant fonctionnel</h1>
      <ErrorBoundary
        FallbackComponent={MonComposantDeSecours}
        onReset={reinitialiser}
        onError={gererErreur}
      >
        {/* Contenu du composant */}
      </ErrorBoundary>
    </div>
  );
}
```

##### 15.1.3 Composant de secours (FallbackComponent)

ErrorBoundary permet de spécifier un composant de secours (FallbackComponent) qui sera affiché à la place du composant en cas d'erreur. Cela offre une expérience utilisateur plus conviviale.

##### 15.1.4 Fonction de réinitialisation (onReset) et gestionnaire d'erreur (onError)

ErrorBoundary propose également des fonctions pour réinitialiser l'état du composant (onReset) et pour gérer les erreurs (onError). Ces fonctions vous permettent de personnaliser davantage le comportement en cas d'erreur.

#### 15.2 Exemple pratique

##### 15.2.1 Création d'un composant ErrorFallback

Voici un exemple de composant ErrorFallback personnalisé qui affiche un message d'erreur convivial et propose un bouton pour réessayer :

```javascript
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Une erreur s'est produite :</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Réessayer</button>
    </div>
  );
}
```

##### 15.2.2 Gestion des erreurs

Intégrez ErrorBoundary dans votre composant et utilisez-le pour envelopper les parties du code susceptibles de générer des erreurs. En cas d'erreur, le composant ErrorFallback sera rendu à la place, offrant ainsi une meilleure expérience utilisateur.

#### 15.3 Questions et réponses

Avez-vous des questions sur la gestion des erreurs dans les composants fonctionnels de React ou sur l'utilisation d'ErrorBoundary ?

---

Nous avons maintenant exploré la gestion des erreurs dans les composants fonctionnels de React en utilisant ErrorBoundary. Vous avez également vu comment créer un composant de secours personnalisé et comment gérer les erreurs de manière appropriée. Dans la dernière section, nous conclurons le cours et fournirons des ressources supplémentaires pour les étudiants.
