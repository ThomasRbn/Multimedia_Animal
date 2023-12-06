# Comment lancer l'application
## Prérequis
- Node JS >= 21.0.0
- NPM >= 10.0.0

## Installation
```bash
npm install
```

## Lancement
```bash
http-server
```

## Code

Le code source est du JavaScript, du HTML et du CSS natif. Node JS est utilisé pour lancer un serveur HTTP.

# Fonctionnalités : 

## Primaires

- Changement de la langue de la synthèse vocale en changeant la langue dans le menu déroulant
- Mode Apprentissage : Annonce du nom de l'animal en cliquant sur la tuile associée
- Mode Jeu : Le jeu annonce le nom d'un animal dans la langue associée, et le joueur doit cliquer sur le bon animal

## Bonus

- Mode Phrase à compléter : Une phrase à trou est affichée, et le joueur doit cliquer sur le nom de l'animal qui correspond le mieux à la phrase

# Choix :
- Mise en place d'animations et de sons pour rendre l'application plus ludique et plus compréhensible
- Utilisation de fichiers JavaScript pour stocker les données des animaux, dans le but de devoir uniquement effectuer des "import" dans les fichiers JS qui en ont besoin
- Mise en place dans le fichier HTML des images des animaux et de leur nom. Le script JS peut ensuite récupérer ces informations et les changer en fonction de la langue choisie.
- Séparation des actions principales des évènements dans des modules différents pour les réutiliser plus tard (notamment l'audio)