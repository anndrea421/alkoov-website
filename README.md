🏕 ALKOOV – Veebileht

Selle projekti eesmärk on luua kaasaegne, kiire ja mobiilisõbralik veebileht, kasutades HTML-i, CSS-i, JavaScripti, Reacti, Vite’i ja vajadusel Tailwind CSS-i.

🚀 Funktsioonid

Kiire ja kerge Vite arendusserver

Reacti komponendipõhine arhitektuur

Tailwind CSS (kui kasutusel)

Responsiivne disain

GitHub Pages toe võimalus

📦 Paigaldamine ja arenduskeskkonna käivitamine
1. Klooni repo
git clone https://github.com/<sinu-kasutajanimi>/<repo-nimi>.git
cd <repo-nimi>

2. Paigalda sõltuvused
npm install

3. Käivita arendusserver
npm run dev

🛠️ Projekti struktuur
/
├─ public/         # pildid, staatilised failid
├─ src/
│  ├─ components/  # React komponendid
│  ├─ assets/      # kujundusfailid, pildid
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
├─ vite.config.js (või .ts)
└─ README.md

🌐 Deploy GitHub Pages'i

Kui kasutad Vite + React projekti:

Installi deploy tööriist:

npm install gh-pages --save-dev


Lisa package.json failile:

"homepage": "https://<sinu-kasutajanimi>.github.io/<repo-nimi>/",


Lisa skriptid:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}


Deploy:

npm run build
npm run deploy
