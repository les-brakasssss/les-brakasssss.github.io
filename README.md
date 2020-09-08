<div align="center">
    <img src="/static/svg/logo.svg"  alt="Logo - Les Brakasssss'">
    <h1 align = "center">Les Brakasssss' - Site officiel</h1>
</div>

Bienvenue sur le repositoire de code du site officiel des Brakasssss'.

Il s'agit (pour l'instant) d'un site vitrine généré à l'aide d'un générateur de site statique (NuxtJS).
Le site est déployé depuis la branche 'master' uniquement.

## License

Le projet est [sous license MIT](/LICENSE.md) pour le code uniquement. Le contenu étant spécifique, il n'est donc pas soumis à license.

## Pour bien démarrer

- Cloner le projet dans le répertoire de votre choix

`git clone https://gitlab.com/brakasssss/brakasssss.gitlab.io`

- Installer les dépendances

`yarn`

- Coder / Ajouter du contenu

- Remonter les changements

`git push origin dev`

## Philosophie de développement

- Utiliser yarn dans la mesure du possible (Choisi pour sa capacité à faire de la reprise sur erreur en cas de réseau minable comme à la campagne française)

- utiliser le 'Git Workflow' : Remonter les changements sur une branche appropriée (branche spécifique ou branche dev) et faire des 'merge requests'.

- Pour limiter les déploiements intempestifs de la branche 'master' il faut utiliser la branche de developpement pour remonter les changements et la fusionnner (dans master) quand tout est prêt pour un nouveau déploiement.

- Pour faciliter la compréhension des changements, il faut essayer de faire des commits qui regroupent les changements de façon unitaire.

- Pour faciliter la compréhension de l'historique, il faut mettre à jour le changelog.

- Garder l'ensemble simple : il s'agit d'un site vitrine, il n'y a donc pas besoin de sortir l'artillerie lourde.

- Aller droit au but et ne pas réinventer la roue.

- Respecter la structure du projet pour que tout le monde puisse s'y retrouver.

- Les Brakasssss sont funs, le site doit l'être également.
