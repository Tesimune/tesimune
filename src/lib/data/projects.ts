export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'AnalogueShifts',
        description: 'Remote work and talent management.',
        image: '/images/analogueshifts.png',
        link: 'https://www.analogueshifts.com',
        tags: ['NextJS', 'TypeScript', 'Tailwind CSS', 'NodeJS', 'Laravel'],
    },
    {
        id: 2,
        title: 'VroomNG',
        description: 'Infrastructure for automotive ride marketplace.',
        image: '/images/vroomng.png',
        link: 'https://www.vroomng.com',
        tags: ['JavaScript', 'NodeJS', 'Laravel', 'PHP', 'MySQL'],
    },
    {
        id: 3,
        title: 'HostShifts',
        description: 'Web hosting platform with cPanel and domain.',
        image: '/images/hostshifts.png',
        link: 'https://www.hostshifts.com',
        tags: ['VueJS', 'TypeScript', 'TailwindCSS', 'Laravel', 'PHP'],
    },
    {
        id: 4,
        title: 'FastBuka',
        description: 'A multi-vendor with web3 blockchain payment.',
        image: '/images/fastbuka.jpg',
        link: 'https://www.fastbuka.com',
        tags: ['NextJS', 'TypeScript', 'NestJS', 'PostgreSQL', 'Web3'],
    },
    {
        id: 5,
        title: 'Trazen',
        description: 'Your personalized Web3 feed and portfolio.',
        image: '/images/trazen.png',
        link: 'https://www.trazen.xyz',
        tags: ['TypeScript', 'NestJS', 'PostgreSQL', 'Docker', 'AWS'],
    },
];
