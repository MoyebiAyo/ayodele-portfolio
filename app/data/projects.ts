import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics. Built with scalability and performance in mind.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/ayodele/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering. Streamline your workflow efficiently.",
    image: "/projects/taskmanager.png",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/ayodele/taskmanager",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with real-time forecasts, interactive maps, and personalized alerts. Clean UI with smooth animations.",
    image: "/projects/weather.png",
    tech: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS3"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/ayodele/weather-dashboard",
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Comprehensive analytics platform for social media metrics with data visualization, trend analysis, and automated reporting features.",
    image: "/projects/analytics.png",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/ayodele/social-analytics",
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description: "Mobile-first fitness tracking application with workout plans, progress tracking, and community features. Stay motivated and reach your goals.",
    image: "/projects/fitness.png",
    tech: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/ayodele/fitness-tracker",
  },
];
