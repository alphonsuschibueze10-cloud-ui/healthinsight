# HealthSight Frontend

A modern, responsive healthcare analytics dashboard built with Next.js 15, React 19, and Tailwind CSS. HealthSight provides predictive intelligence for primary healthcare, enabling healthcare workers to forecast disease outbreaks, predict drug stockouts, and receive intelligent alerts.

## 🏥 Features

- **Disease Forecasting**: AI-powered models to predict malaria, cholera, and other disease trends up to 8 weeks ahead
- **Smart Alerts**: Timely notifications about stockout risks, disease surges, and outbreak warnings via SMS
- **Natural Language Queries**: Ask questions in plain language and get instant insights from healthcare data
- **Real-time Dashboard**: Comprehensive overview of healthcare metrics and predictions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Adaptive theming for different user preferences

## 🚀 Tech Stack

- **Framework**: Next.js 15.2.4
- **React**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Package Manager**: pnpm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/alphonsuschibueze10-cloud-ui/healthinsight.git
   cd healthinsight/healthsight-frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
healthsight-frontend/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard pages
│   │   ├── alerts/        # Alerts management
│   │   ├── forecasts/     # Disease forecasting
│   │   ├── nlq/          # Natural Language Queries
│   │   └── settings/     # User settings
│   ├── login/            # Authentication
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── ui/              # Base UI components
│   ├── dashboard-*.tsx  # Dashboard-specific components
│   └── auth-wrapper.tsx # Authentication wrapper
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── public/              # Static assets
│   ├── healthsight-logo.jpg
│   ├── favicon.ico
│   └── manifest.json
└── styles/              # Additional styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Sahara Blue (`#0b1b3f`)
- **Secondary**: Oasis Teal (`#09a88e`)
- **Accent**: Desert Sand (`#ffb86b`)

### Typography
- **Font**: Geist Sans (primary), Geist Mono (code)

## 🔐 Authentication

The application uses client-side authentication with localStorage for token management. The `AuthWrapper` component handles authentication state and redirects unauthenticated users to the login page.

## 📱 Progressive Web App (PWA)

HealthSight is configured as a Progressive Web App with:
- Web App Manifest
- Service Worker support
- Offline capabilities
- Installable on mobile devices

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email alphonsuschibueze10@gmail.com or create an issue in the repository.

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Documentation**: [Coming Soon]
- **API Documentation**: [Coming Soon]

---

Built with ❤️ for better healthcare outcomes
