
import { Subject, Topic } from './types';

export const SYLLABUS: Record<Subject, string[]> = {
  [Subject.PURE_MATH]: [
    "Algebra",
    "Functions",
    "Coordinate Geometry",
    "Circular Measure",
    "Trigonometry",
    "Vectors",
    "Series",
    "Differentiation",
    "Integration",
    "Differential Equations"
  ],
  [Subject.CHEMISTRY]: [
    "Atomic Structure",
    "Chemical Bonding",
    "Chemical Energetics",
    "Electrochemistry",
    "Equilibria",
    "Reaction Kinetics",
    "Inorganic Chemistry (Group 2 & 17)",
    "Transition Elements",
    "Organic Chemistry - Introduction",
    "Hydrocarbons"
  ],
  [Subject.PHYSICS]: [
    "Physical Quantities & Units",
    "Kinematics",
    "Dynamics",
    "Forces, Density & Pressure",
    "Work, Energy & Power",
    "Deformation of Solids",
    "Waves",
    "Superposition",
    "Electricity",
    "D.C. Circuits",
    "Particle & Nuclear Physics"
  ]
};

export const INITIAL_RESOURCES: any[] = [
  {
    id: '1',
    title: 'Kinematics Mastery Notes',
    subject: Subject.PHYSICS,
    topic: 'Kinematics',
    type: 'Notes',
    uploaderName: 'StudentA',
    uploadDate: '2023-10-15',
    fileUrl: '#',
    fileSize: '1.2 MB',
    description: 'Comprehensive notes covering displacement-time and velocity-time graphs.'
  },
  {
    id: '2',
    title: 'Integration Practice Sheet',
    subject: Subject.PURE_MATH,
    topic: 'Integration',
    type: 'Worksheets',
    uploaderName: 'MathWhiz',
    uploadDate: '2023-11-02',
    fileUrl: '#',
    fileSize: '450 KB',
    description: '15 hard integration by parts problems.'
  }
];
