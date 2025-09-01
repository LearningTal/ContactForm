# Amazing Contact Form 🚀

A beautiful, modern contact form built with React, Vite, and Tailwind CSS featuring stunning animations, glassmorphism effects, and responsive design.

![Contact Form Preview](https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Amazing+Contact+Form)

## ✨ Features

- 🎨 **Amazing Design** - Modern glassmorphism UI with gradient backgrounds
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- ✅ **Form Validation** - Real-time validation with React Hook Form
- 🌟 **Floating Particles** - Animated background elements
- 🎯 **Accessible** - Built with accessibility best practices
- 🚀 **Easy Deployment** - Ready for GitHub Pages

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Hook Form** - Performant forms with easy validation
- **Heroicons** - Beautiful hand-crafted SVG icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installing Node.js

If you don't have Node.js installed:

1. **Windows**: Download from [nodejs.org](https://nodejs.org/) or use chocolatey:
   ```bash
   choco install nodejs
   ```

2. **macOS**: Download from [nodejs.org](https://nodejs.org/) or use homebrew:
   ```bash
   brew install node
   ```

3. **Linux**: Use your package manager:
   ```bash
   # Ubuntu/Debian
   sudo apt install nodejs npm
   
   # CentOS/RHEL
   sudo yum install nodejs npm
   ```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/contact-form-app.git
cd contact-form-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Your app will be running at `http://localhost:5173` 🎉

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
contact-form-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── ContactForm.jsx
│   │   ├── Hero.jsx
│   │   └── Layout.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # You are here!
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  }
}
```

### Animations

Modify animations in `src/index.css`:

```css
@keyframes yourCustomAnimation {
  /* Your keyframes */
}
```

### Form Fields

Add or modify form fields in `src/components/ContactForm.jsx`.

## 🚀 Deployment

### GitHub Pages

1. **Install gh-pages** (already included in package.json):
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js** with your repository name:
   ```javascript
   base: '/your-repo-name/',
   ```

3. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### Manual GitHub Pages Setup

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Create a new repository** on GitHub

3. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click Save

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **Surge**: `npm install -g surge && surge dist`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🐛 Troubleshooting

### Common Issues

1. **Node modules error**: Delete `node_modules` and `package-lock.json`, then run `npm install`
2. **Build fails**: Check that all dependencies are installed
3. **Styles not loading**: Ensure Tailwind CSS is properly configured

### Need Help?

- Check the [Issues](https://github.com/yourusername/contact-form-app/issues) page
- Create a new issue with detailed information
- Join our [Discussions](https://github.com/yourusername/contact-form-app/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [Heroicons](https://heroicons.com/) for the beautiful icons
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

Made with ❤️ and lots of ☕

**Happy Coding!** 🎉
