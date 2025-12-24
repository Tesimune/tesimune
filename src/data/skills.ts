export interface SkillCategory {
  id: number;
  category: string;
  icon: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    category: 'Frontend',
    icon: '🎨',
    items: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'React Native',
      'NextJS',
      'VueJS',
      'Tailwind CSS',
      'ShadCN',
    ],
  },
  {
    id: 2,
    category: 'Backend',
    icon: '⚙️',
    items: [
      'NodeJS',
      'ExpressJS',
      'NestJS',
      'Django',
      'Flask',
      'FastAPI',
      'Laravel',
      'Spring Boot',
      'Ruby on Rails',
    ],
  },
  {
    id: 3,
    category: 'Database',
    icon: '💾',
    items: ['MySQL', 'PostgreSQL', 'MariaDB', 'MongoDB', 'Redis', 'Firebase', 'Prisma', 'TypeORM'],
  },
  {
    id: 4,
    category: 'DevOps & Cloud',
    icon: '☁️',
    items: ['Git', 'Docker', 'AWS', 'Google Console', 'Azure', 'CI/CD'],
  },
  {
    id: 5,
    category: 'Web3 & Blockchain',
    icon: '⛓️',
    items: ['Ethereum', 'Smart Contracts', 'Web3.js', 'Ethers.js', 'Solidity'],
  },
  {
    id: 6,
    category: 'Tools & Others',
    icon: '🛠️',
    items: ['Figma',  'Postman', 'Figma', 'Jira', 'Agile/Scrum', 'Linux', 'Arduino', 'IOT'],
  },
];
