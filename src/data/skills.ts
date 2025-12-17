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
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 2,
    category: 'Backend',
    icon: '⚙️',
    items: [
      'Node.js',
      'NestJS',
      'Laravel',
      'PHP',
      'Express',
      'RESTful APIs',
      'GraphQL',
    ],
  },
  {
    id: 3,
    category: 'Database',
    icon: '💾',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM'],
  },
  {
    id: 4,
    category: 'DevOps & Cloud',
    icon: '☁️',
    items: ['AWS', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'CI/CD'],
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
    items: ['Git', 'VS Code', 'Postman', 'Figma', 'Jira', 'Agile/Scrum'],
  },
];
