# Create a Free Portfolio Using Azure App Service

<img width="960" alt="image" src="https://github.com/user-attachments/assets/0c2f2691-d5be-493b-a0b3-e60c868b21d1" />

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/)
![GitHub last commit](https://img.shields.io/github/last-commit/Curious4Tech/portfolio)
![Azure App Service Status](https://img.shields.io/badge/Azure%20App%20Service-Active-success)
## Overview

A step-by-step guide to create and deploy a professional portfolio website using Azure App Service's free tier. This project uses Next.js, Tailwind CSS, and GitHub Actions for automated deployment.

## 🌟 Features

- **Fast & SEO Friendly**: Built with Next.js 15
- **Responsive Design**: Works on all devices
- **Dark Mode**: Automatic and manual theme switching
- **Sections Include**:
  - About Me
  - Projects Showcase
  - Skills & Technologies
  - Certifications & Achievements
  - Contact Information

## 🛠️ Tech Stack

- **Frontend**: Next.js 20, Tailwind CSS
- **Deployment**: Azure App Service
- **Performance**: Next.js Image Optimization
- **Analytics**: Azure Application Insights

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or higher)
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

3. **Run Development Server**
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

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Azure Documentation](https://docs.microsoft.com/azure/)
- [GitHub Actions](https://docs.github.com/actions)

## 📞 Support

For support, please open an issue in the repository or contact [Curious4Tech](https://github.com/Curious4Tech).

---
⭐ Created with ❤️ by Curious4Tech | Last Updated: 2025-03-08 13:10:58 UTC
