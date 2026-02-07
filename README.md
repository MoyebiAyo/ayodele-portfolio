# Ayodele - Developer Portfolio

A clean, modern, and responsive developer portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Connected to GitHub for seamless version control and auto-deployment.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## Features

- 🎨 **Modern Design**: Clean, minimal, and elegant interface
- 🌓 **Dark Mode**: Full theme support with smooth transitions
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Fast Performance**: Optimized for speed and SEO
- 🎭 **Smooth Animations**: Beautiful entrance and hover effects
- 🎯 **Type-Safe**: Built with TypeScript for reliability
- 🔧 **Easy to Customize**: Well-organized code structure

## Sections

1. **Hero Section**: Eye-catching introduction with animated decorative shapes
2. **About Section**: Professional bio with highlight cards (location, experience, focus)
3. **Projects Section**: Showcase of featured projects with tech stack tags
4. **Skills Section**: Display of technical skills with progress bars
5. **Testimonials Section**: Client reviews with resume download option
6. **Contact Section**: Contact form with social links
7. **Footer**: Quick navigation and social media links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:
```bash
cd ayodele-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Personal Information

Edit `app/data/content.ts` to update your personal information:

```typescript
export const content = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your Tagline",
    bio: "Your bio paragraph...",
    location: "Your Location",
    experience: "Your Experience",
    focus: "Your Focus Area",
  },
  // ... more content
};
```

### 2. Projects

Edit `app/data/projects.ts` to add/modify your projects:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Name",
    description: "Project description...",
    image: "/projects/your-image.png",
    tech: ["React", "Next.js", "TypeScript"],
    demoUrl: "https://your-demo.com",
    githubUrl: "https://github.com/you/project",
  },
  // Add more projects...
];
```

### 3. Skills

Edit `app/data/skills.ts` to update your skills:

```typescript
export const skills: Skill[] = [
  { name: "Your Skill", level: 90 },
  // Add more skills...
];
```

### 4. Testimonials

Edit `app/data/testimonials.ts` to add testimonials:

```typescript
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Client Name",
    role: "Client Role",
    content: "Testimonial text...",
    avatar: "/avatars/avatar1.png",
  },
  // Add more testimonials...
];
```

### 5. Images

Replace placeholder images with your own:

- **Profile Photo**: Replace `public/profile.png` (800x800px recommended)
- **Project Screenshots**: Replace images in `public/projects/` (800x600px recommended)
- **Testimonial Avatars**: Replace images in `public/avatars/` (200x200px recommended)

### 6. Social Links

Update your social media links in `app/data/content.ts`:

```typescript
contact: {
  email: "your.email@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
}
```

### 7. Colors and Theme

Customize colors in `tailwind.config.ts`:

```typescript
extend: {
  colors: {
    // Add your custom colors here
  },
}
```

Or modify CSS variables in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## Project Structure

```
ayodele-portfolio/
├── app/
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Navigation bar with dark mode toggle
│   │   ├── Hero.tsx        # Hero section with animations
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Skills.tsx      # Skills display
│   │   ├── Testimonials.tsx # Testimonials section
│   │   ├── Contact.tsx     # Contact form
│   │   ├── Footer.tsx      # Footer
│   │   └── ThemeProvider.tsx # Theme provider
│   ├── data/              # Data files
│   │   ├── content.ts     # Personal content
│   │   ├── projects.ts    # Projects data
│   │   ├── skills.ts      # Skills data
│   │   └── testimonials.ts # Testimonials data
│   ├── types/             # TypeScript types
│   │   └── index.ts       # Type definitions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
│   ├── projects/          # Project images
│   ├── avatars/           # Avatar images
│   └── profile.png        # Profile photo
├── tailwind.config.ts     # Tailwind configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **next-themes**: Dark mode support
- **lucide-react**: Beautiful icon library
- **React 18**: Latest React features

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "export": "next export",
   "deploy": "npm run build && npm run export && gh-pages -d out"
   ```
3. Update `next.config.mjs`:
   ```javascript
   output: 'export',
   basePath: '/your-repo-name',
   ```
4. Run: `npm run deploy`

## Performance Optimization

- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ SEO-friendly meta tags
- ✅ Accessible HTML structure
- ✅ Fast loading animations
- ✅ Responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing this portfolio:

1. Check the customization guide above
2. Review the code comments
3. Refer to Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
4. Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Credits

Built with ❤️ using Next.js and Tailwind CSS

---

**Made by Ayodele** • [GitHub](https://github.com/ayodele) • [LinkedIn](https://linkedin.com/in/ayodele) • [Twitter](https://twitter.com/ayodele)
