# Next.js Authentication Template

A modern, production-ready template for building full-stack applications with Next.js, featuring built-in authentication, database integration, and a clean, minimal UI.


## Features

- 🔒 Authentication ready with NextAuth.js
- 📦 Database integration with Prisma and PostgreSQL
- 🎨 Clean and minimal UI with Tailwind CSS
- 🚀 Built with Next.js 14 App Router
- 🔑 OAuth support for Google and GitHub
- 🎯 TypeScript for type safety
- 🎨 Shadcn UI components
- 📱 Fully responsive design

## Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/yesabhishek/nextjs-auth-template.git
cd nextjs-auth-template
```

2. **Set up environment variables**

```bash
# Copy the example env file
cp .env.example .env

# Add your environment variables to .env
DATABASE_URL="postgresql://..."
GITHUB_ID="your-github-id"
GITHUB_SECRET="your-github-secret"
GOOGLE_ID="your-google-id"
GOOGLE_SECRET="your-google-secret"
```

3. **Install dependencies**

```bash
npm install
```

4. **Set up the database**

```bash
# Run database migrations
npx prisma migrate dev
```

5. **Start the development server**

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application running.

## Integrations

This template comes with several key integrations to help you build faster:

- **PostgreSQL**: Production-ready database setup
- **Prisma**: Modern database ORM for TypeScript
- **Google OAuth**: Sign in with Google accounts
- **GitHub OAuth**: Sign in with GitHub accounts
- **Auth.js**: Flexible authentication for Next.js

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── styles/               # Global styles and Tailwind config
```

## Roadmap

Current development status and upcoming features:

✅ Authentication Module
✅ Database Integration
✅ Responsive Layouts
🚧 Email Integration
🚧 Docker Support
🚧 Notification System

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this template helpful, consider:

- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to its improvement

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Authentication by [Auth.js](https://authjs.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by [Abhishek](https://github.com/yesabhishek)
