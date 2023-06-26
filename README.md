# Calculatrices

Ce projet contient trois calculatrices avec différentes fonctionnalités. Les calculatrices sont développées en utilisant React.js et sont réparties dans différents fichiers du projet.

## Produits

### BasicCalculator

Le composant `BasicCalculator` est une calculatrice de base qui permet d'effectuer des opérations arithmétiques simples. Elle prend en charge les opérations d'addition, de soustraction, de multiplication et de division. Le fichier correspondant est `BasicCalculator.js` situé dans le répertoire `produit`.

### CollegeCalculator

Le composant `CollegeCalculator` est une calculatrice qui étend les fonctionnalités de la calculatrice de base (`BasicCalculator`). En plus des opérations de base, elle inclut deux modules supplémentaires : `AdvancedFunctions` et `UnitConversion`. Le fichier correspondant est `CollegeCalculator.js` situé dans le répertoire `produit`. Les deux modules supplémentaires sont situés dans le répertoire `components`.

### LyceeCalculator

Le composant `LyceeCalculator` est une calculatrice qui reprend toutes les fonctionnalités de la calculatrice du collège (`CollegeCalculator`). En plus des modules présents dans `CollegeCalculator`, elle ajoute deux modules supplémentaires : `Trigonometry` et `MatrixCalculation`. Le fichier correspondant est `LyceeCalculator.js` situé dans le répertoire `produit`. Les deux modules supplémentaires sont situés dans le répertoire `components`.

## Modules

### AdvancedFunctions

Le composant `AdvancedFunctions` fournit des fonctions mathématiques avancées telles que la racine carrée, la puissance, les fonctions trigonométriques, etc. Il est utilisé dans la calculatrice `CollegeCalculator` et est situé dans le répertoire `components`.

### UnitConversion

Le composant `UnitConversion` permet de convertir différentes unités de mesure, telles que les longueurs, les températures, les volumes, etc. Il est utilisé dans la calculatrice `CollegeCalculator` et est situé dans le répertoire `components`.

### Trigonometry

Le composant `Trigonometry` fournit des fonctions trigonométriques telles que le sinus, le cosinus, la tangente, etc. Il est utilisé dans la calculatrice `LyceeCalculator` et est situé dans le répertoire `components`.

### MatrixCalculation

Le composant `MatrixCalculation` permet d'effectuer des opérations sur les matrices, telles que l'addition, la soustraction, la multiplication, etc. Il est utilisé dans la calculatrice `LyceeCalculator` et est situé dans le répertoire `components`.

## Comment exécuter le projet

1. Assurez-vous d'avoir Node.js installé sur votre machine.
2. Extraire le projet ZIP.
3. Ouvrez le projet sur un éditeur de code (VS Code par exemple)
4. Ouvrez un terminal et exécutez la commande `npm install` pour installer les dépendances.
5. Exécutez la commande `npm start` pour démarrer l'application.
6. Ouvrez votre navigateur et accédez à l'URL `http://localhost:3000` pour voir les calculatrices en action.


C'est tout ! 
