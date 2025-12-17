export interface Experience {
  id: number;
  period: string;
  type: string;
  role: string;
  company: string;
  location: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    period: 'Jun 2024 - Feb 2025',
    type: '(full-time, remote)',
    role: 'Software Engineer',
    company: 'AnalogueShifts',
    location: 'Lead software and backend engineer.',
  },
  {
    id: 2,
    period: 'Oct 2023 - Mar 2025',
    type: '(full-time, remote)',
    role: 'Backend Engineer',
    company: 'VroomNG',
    location:
      'Developed RESTful APIs and backend services using NodeJS and Laravel.',
  },
  {
    id: 3,
    period: 'Sep 2024 - Sep 2025',
    type: '(full-time, remote)',
    role: 'Software Engineer',
    company: 'FastBuka',
    location:
      'Developed RESTful APIs and backend services using NestJS/TypeScript.',
  },
  {
    id: 4,
    period: 'Apr 2022 - Jun 2024',
    type: '(full-time, remote)',
    role: 'FullStack Developer',
    company: 'AnalogueShifts',
    location:
      'Led full-stack development initiatives, handling both frontend and backend.',
  },
];
