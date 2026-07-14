import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'فروشگاه آنلاین سلطانی',
    description: 'React + TypeScript + Tailwind.فروشگاه عینک , سبد خرید جستجوی پیشرفته پنل کاربری.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    liveUrl: 'https://mobileshop.vercel.app',
    sourceUrl: 'https://github.com/yourname/mobileshop',
    image: '/images/mobileshop.png',
  },
  {
    id: '2',
    title: 'داشبورد مدیریت',
    description: 'Next.js + Chart.js. پنل مدیریت خرید و مدیریت کاربران و مشریان با نمودارهای تعاملی.',
    techs: ['Next.js', 'TypeScript', 'Chart.js', 'Prisma'],
    liveUrl: 'https://admin-demo.netlify.app',
    sourceUrl: 'https://github.com/yourname/admin-dashboard',
    image: '/images/dashboard.png',
  },
  {
    id: '3',
    title: 'ترک تور',
    description: 'Next.js + Chart.js. پنل مدیریت با نمودارهای تعاملی.',
    techs: ['Next.js', 'TypeScript', 'React Router', 'Axios'],
    liveUrl: 'https://tour-torque-reactts.vercel.app/',
    sourceUrl: 'https://github.com/MobinDe/tour-torque-react',
    image: '/images/Screenshot (2).png',
  },
  {
    id: '4',
    title: 'ورزش‌نما',
    description: 'پلتفرم تماشای فیلم و مسابقات ورزشی',
    techs: ['Next.js', 'TypeScript', 'Vite', 'React Router','Axios'],
    liveUrl: 'https://sports-stream-hub-rutf.vercel.app',
    sourceUrl: 'https://github.com/MobinDe/sports-stream-hub',
    image: '/images/Screenshot 2026-07-14 135547.png',
  }
];
