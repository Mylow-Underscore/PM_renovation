# PM Rénovation - Site Web

Site web moderne pour PM Rénovation, entreprise de rénovation générale basée en Charente-Maritime.

## 🚀 Technologies

- **Next.js 15** - Framework React performant pour SSR/SSG
- **TypeScript** - Langage typé pour robustesse
- **TailwindCSS** - Framework CSS utility-first
- **Docker & Docker Compose** - Containerisation et orchestration

## 📋 Prérequis

- Node.js 20+ et npm/yarn
- Docker et Docker Compose (optionnel, pour production)

## 🔧 Installation locale

### 1. Cloner le projet

```bash
git clone https://github.com/your-repo/pm-renovation.git
cd pm-renovation
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer le serveur de développement

```bash
npm run dev
```

L'application sera accessible à `http://localhost:3000`

### 4. Scripts disponibles

```bash
npm run build      # Construire pour la production
npm run start      # Démarrer le serveur de production
npm run lint       # Vérifier la qualité du code
npm run type-check # Vérifier les types TypeScript
npm run format     # Formater le code avec Prettier
```

## 🐳 Déploiement avec Docker

### Construire l'image Docker

```bash
docker-compose build
```

### Démarrer les conteneurs

```bash
docker-compose up -d
```

### Vérifier l'état

```bash
docker-compose ps
```

### Voir les logs

```bash
docker-compose logs -f nextjs-app
```

### Arrêter les conteneurs

```bash
docker-compose stop
docker-compose down
```

## 📁 Structure du projet

```
pm-renovation/
├── src/
│   ├── app/                 # Pages et layouts (App Router)
│   ├── components/          # Composants React
│   │   ├── ui/             # Composants génériques
│   │   ├── layout/         # Layout components
│   │   └── features/       # Composants métier
│   ├── hooks/              # Hooks personnalisés
│   ├── types/              # Définitions TypeScript
│   ├── utils/              # Fonctions utilitaires
│   ├── lib/                # Logique métier
│   ├── context/            # React Context
│   └── styles/             # Feuilles de style
├── public/                 # Assets statiques
├── Dockerfile              # Configuration Docker
├── docker-compose.yml      # Orchestration Docker
├── next.config.js          # Configuration Next.js
├── tailwind.config.js      # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances npm
```

## 🎨 Services

PM Rénovation propose les services suivants :

- Terrassement
- Maçonnerie
- Taille de pierres
- Couverture
- Isolation
- Carrelage
- Piscine
- Menuiserie
- Peinture
- Revêtements muraux et sols
- Plomberie
- Électricité

## 📞 Contact

- **Adresse** : 82 Route de Burie, 17100 LA CHAPELLE-DES-POTS
- **Téléphone** : 05 46 97 76 47
- **Email** : contact@pmrenovation17.com

## 📄 Licence

Propriétaire - PM Rénovation 2024