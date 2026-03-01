export interface Experience {
  id: number;
  period: string;
  type: string;
  role: string;
  company: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    period: 'Apr 2022 - Jun 2024',
    type: '(part-time, remote)',
    role: 'FullStack Developer',
    company: 'AnalogueShifts',
    description: 'Handling both frontend and backend.',
  },
  {
    id: 2,
    period: 'Oct 2023 - Mar 2025',
    type: '(part-time, remote)',
    role: 'Backend Engineer',
    company: 'VroomNG',
    description: 'Developed RESTful APIs and backend services.',
  },
  {
    id: 3,
    period: 'Jun 2024 - Feb 2025',
    type: '(full-time, remote)',
    role: 'Software Engineer',
    company: 'AnalogueShifts',
    description: 'Lead software and backend engineer.',
  },

  {
    id: 4,
    period: 'Sep 2024 - Sep 2025',
    type: '(part-time, remote)',
    role: 'Software Engineer',
    company: 'FastBuka',
    description: 'Developed RESTful APIs and backend services.',
  },
];
