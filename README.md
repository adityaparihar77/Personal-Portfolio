# 🎨 Award-Winning Portfolio Website

A modern, premium portfolio website built with React, featuring cinematic animations, 3D elements, and smooth interactions — inspired by Awwwards-winning designs.

![Portfolio Preview](https://via.placeholder.com/1200x600/a855f7/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎯 Core Features
- **3D Hero Section** - Interactive Three.js sphere with dynamic animations
- **Smooth Scroll** - Lenis-powered butter-smooth scrolling experience
- **Custom Cursor** - Magnetic cursor with glow effects (desktop)
- **Framer Motion Animations** - Page transitions and micro-interactions
- **Glassmorphism UI** - Modern frosted glass design elements
- **Scroll Progress Bar** - Visual feedback for page scroll position
- **Responsive Design** - Mobile-first, fully responsive layout
- **Dark Theme** - Professional dark theme with purple accents

### 📑 Sections
1. **Hero** - Fullscreen introduction with animated role text and 3D background
2. **About** - Professional introduction with animated stats cards
3. **Skills** - Technology showcase with progress indicators and hover effects
4. **Projects** - Premium project cards with modal details and tech stacks
5. **Experience** - Vertical timeline of professional journey
6. **Contact** - Modern contact form with EmailJS integration
7. **Footer** - Comprehensive footer with social links

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F

### Libraries & Tools
- **Lenis** - Smooth scroll implementation
- **React Icons** - Icon library
- **React Typed** - Typing animation
- **EmailJS** - Email service integration
- **React Hot Toast** - Notification system

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Build for production**
```bash
npm run build
```

4. **Preview production build**
```bash
npm run preview
```

## 🎨 Customization Guide

### 1. Personal Information
Update your details in:
- `src/components/Hero.jsx` - Name, role, description
- `src/components/AboutNew.jsx` - Stats and bio
- `src/components/ProjectsNew.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Experience.jsx` - Your journey
- `src/components/ContactNew.jsx` - Contact info

### 2. EmailJS Setup
To enable contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update `src/components/ContactNew.jsx` with your credentials

### 3. Resume
Add your resume PDF to `public/resume.pdf`

### 4. Colors & Theme
Customize in `tailwind.config.js`:
```javascript
colors: {
  'accent': {
    primary: '#a855f7',
    secondary: '#c084fc',
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy 'dist' folder
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Project Structure

```
Personal-Portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── AboutNew.jsx
│   │   ├── Skills.jsx
│   │   ├── ProjectsNew.jsx
│   │   ├── Experience.jsx
│   │   ├── ContactNew.jsx
│   │   ├── NavbarNew.jsx
│   │   ├── FooterNew.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── Background3D.jsx
│   ├── hooks/
│   │   └── useSmoothScroll.js
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js
└── vite.config.js
```

## 👤 Author

**Aditya Parihar**
- Full Stack Developer
- React Specialist
- JavaScript Expert

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Awwwards](https://www.awwwards.com/)

---

<div align="center">
  <p>Built with ❤️ using React and Framer Motion</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
