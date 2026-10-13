export interface Presentation {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail?: string; // Path to thumbnail image (e.g., '/images/presentations/my-talk.jpg')
}

export const presentations: Presentation[] = [
  {
    slug: 'ai-code-review-bottleneck',
    title: 'The AI Code Review Bottleneck',
    description:
      'AI Engineering Paris 2026: Matt Pocock and Kitze on PR review bottlenecks, quality gates, agent review and safer delivery.',
    date: '2026',
    tags: ['AI Engineering', 'Code Review', 'AI Agents', 'TypeScript', 'Developer Experience'],
  },
  {
    slug: 'manual-to-velocity-the-spec-driven-way-v3-iran',
    title: 'From Manual to Velocity: The Spec-Driven Way (v3)',
    description:
      'Transform weeks of manual work into seconds with Orval. A complete automation journey from Backend APIs to Frontend, featuring real-world BFF implementation, authentication with mutators, and the power of spec-driven development. Dedicated to Mohammad Reza Ghasemzadeh.',
    date: '2026',
    tags: ['OpenAPI', 'TypeScript', 'Developer Experience', 'API', 'Orval', 'React Query', 'NestJS'],
    // thumbnail: '/images/presentations/manual-to-velocity-v3.jpg', // Uncomment and add your image path
  },
  {
    slug: 'manual-to-velocity-the-spec-driven-way-v2',
    title: 'From Manual to Velocity: The Spec-Driven Way (v2)',
    description:
      'Transform weeks of manual work into seconds with Orval. A complete automation journey from Backend APIs to Frontend, featuring real-world BFF implementation, authentication with mutators, and the power of spec-driven development.',
    date: '2025',
    tags: ['OpenAPI', 'TypeScript', 'Developer Experience', 'API', 'Orval', 'React Query', 'NestJS'],
    // thumbnail: '/images/presentations/manual-to-velocity-v2.jpg', // Uncomment and add your image path
  },
  {
    slug: 'manual-to-velocity-the-spec-driven-way',
    title: 'Manual to Velocity: The Spec-Driven Way',
    description:
      'Learn how to accelerate development velocity using spec-driven development with Orval and OpenAPI.',
    date: '2024',
    tags: ['OpenAPI', 'TypeScript', 'Developer Experience', 'API'],
    // thumbnail: '/images/presentations/manual-to-velocity.jpg', // Uncomment and add your image path
  },
  // Add more presentations here as you create them
];

export function getPresentation(slug: string): Presentation | undefined {
  return presentations.find((p) => p.slug === slug);
}

export function getAllPresentations(): Presentation[] {
  return presentations;
}
