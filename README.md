<<<<<<< HEAD
<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# my-portfolio
>>>>>>> 0496570704819b444dece30f73319ac78acf34a9
=======
# Create a Free Portfolio Using Azure App Service

<img width="960" alt="image" src="https://github.com/user-attachments/assets/0c2f2691-d5be-493b-a0b3-e60c868b21d1" />

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/)
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
⭐ Created with ❤️ by Curious4Tech 
>>>>>>> 26452d1f7da5339bbb41768bf41427b68595b9c7
