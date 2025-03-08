# Create a Free Portfolio Using Azure App Service


![Portfolio Demo](<img width="960" alt="image" src="https://github.com/user-attachments/assets/0c2f2691-d5be-493b-a0b3-e60c868b21d1" />)

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/)
![GitHub last commit](https://img.shields.io/github/last-commit/Curious4Tech/portfolio)
![Azure App Service Status](https://img.shields.io/badge/Azure%20App%20Service-Active-success)
![License](https://img.shields.io/github/license/Curious4Tech/portfolio)

## Overview

A step-by-step guide to create and deploy a professional portfolio website using Azure App Service's free tier. This project uses Next.js, Tailwind CSS, and GitHub Actions for automated deployment.

## 🌟 Features

- **Fast & SEO Friendly**: Built with Next.js 14
- **Responsive Design**: Works on all devices
- **Dark Mode**: Automatic and manual theme switching
- **Sections Include**:
  - About Me
  - Projects Showcase
  - Skills & Technologies
  - Certifications & Achievements
  - Contact Information

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, Tailwind CSS
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions
- **Performance**: Next.js Image Optimization
- **Analytics**: Azure Application Insights

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18.17 or higher)
- [Azure Account](https://azure.microsoft.com/free) (Free Tier eligible)
- [GitHub Account](https://github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## 🚀 Quick Start

1. **Clone the Repository**
```bash
git clone https://github.com/Curious4Tech/portfolio.git
cd portfolio
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment Variables**
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. **Run Development Server**
```bash
npm run dev
```

5. **Open Browser**
```
http://localhost:3000
```

## 🌐 Deployment

### Azure App Service Setup

1. Create a new Azure App Service:
```bash
az group create --name portfolio-rg --location eastus
az appservice plan create --name portfolio-plan --resource-group portfolio-rg --sku F1
az webapp create --name your-portfolio --resource-group portfolio-rg --plan portfolio-plan
```

2. Configure GitHub Actions:
   - Go to your repository settings
   - Navigate to Secrets and Variables
   - Add the following secrets:
     - `AZURE_CREDENTIALS`
     - `AZURE_WEBAPP_NAME`

### GitHub Actions Workflow

```yaml
name: Deploy to Azure
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      # Your deployment steps here
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Projects.tsx
│   └── Certifications.tsx
├── public/
│   └── images/
├── styles/
│   └── tailwind.css
└── package.json
```

## ⚙️ Configuration

### Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  // ... rest of your config
}
```

### Next.js

```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // ... other config options
}
```

## 🔒 Security Best Practices

1. Enable Azure App Service Authentication
2. Configure HTTPS only
3. Use environment variables for sensitive data
4. Implement CSP headers
5. Regular dependency updates

## 📈 Performance Optimization

- Image optimization using Next.js Image component
- Lazy loading of components
- Static page generation
- Asset compression
- CDN integration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Azure Documentation](https://docs.microsoft.com/azure/)
- [GitHub Actions](https://docs.github.com/actions)

## 📞 Support

For support, please open an issue in the repository or contact [Curious4Tech](https://github.com/Curious4Tech).

---
⭐ Generated with ❤️ by Curious4Tech | Last Updated: 2025-03-08 13:10:58 UTC
