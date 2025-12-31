
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Settings, 
  Cpu, 
  ClipboardCheck, 
  Building2 
} from 'lucide-react';
import { ServiceCategory, TeamMember, Client } from './types';

export const SERVICES: ServiceCategory[] = [
  {
    title: "Staffing & Workforce Solutions",
    icon: <Users className="w-6 h-6" />,
    description: "Flexible and reliable manpower solutions for diverse operational needs.",
    items: [
      "Contract Staffing",
      "Temporary & Project-Based Staffing",
      "Long-Term Outsourced Workforce",
      "On-Site Workforce Deployment",
      "Shift-Based & Plant Workforce Support"
    ],
    focus: [
      "Statutory & labour law compliance",
      "Attendance & workforce monitoring",
      "Productivity-oriented deployment"
    ]
  },
  {
    title: "HR Solutions & Workforce Management",
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: "End-to-end HR support from recruitment to payroll administration.",
    items: [
      "Recruitment & Onboarding Support",
      "HR Documentation & Compliance",
      "Payroll Assistance & Statutory Support",
      "Time & Attendance Management",
      "Workforce Training & Supervision",
      "Employee Performance Monitoring"
    ]
  },
  {
    title: "IT Recruitment Services",
    icon: <Cpu className="w-6 h-6" />,
    description: "Sourcing specialized tech talent for modern enterprises.",
    items: [
      "Software & Application Engineers",
      "Cloud, Data & Infrastructure Roles",
      "QA & Testing Professionals",
      "Project & Product Management Roles"
    ],
    models: [
      "Permanent Hiring",
      "Contract-to-Hire",
      "Project-Based IT Hiring"
    ]
  },
  {
    title: "Non-IT Recruitment Services",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Comprehensive hiring for production, logistics, and admin roles.",
    items: [
      "Manufacturing & Production Workforce",
      "Administration & Office Staff",
      "Accounts & Finance Roles",
      "Logistics & Warehouse Workforce",
      "Sales, Marketing & Support Staff"
    ],
    strengths: [
      "Skill-based screening",
      "Background & experience validation",
      "Quick hiring turnaround"
    ]
  },
  {
    title: "Industrial & Operations Support",
    icon: <Settings className="w-6 h-6" />,
    description: "Robust support for manufacturing plants and shop floors.",
    items: [
      "Skilled & Unskilled Manpower Supply",
      "Factory Operations Assistance",
      "Shop Floor & Assembly Line Workforce",
      "Logistics & Material Handling Support",
      "Event & Corporate Program Workforce"
    ]
  }
];

export const TEAM: TeamMember[] = [
  { name: "Srinivasan Kalidass", role: "Chief Business Head" },
  { name: "Dilli Babu", role: "Head – Operations & HR" },
  { name: "Venkatesan Muthuram", role: "Head – Finance" }
];

export const CLIENTS: Client[] = [
  { name: "KYB Motorcycle Suspension System India Pvt. Ltd." },
  { name: "Godrej Consumer Products" },
  { name: "Aattral Components Private Limited" },
  { name: "Bray Controls India Pvt. Ltd." },
  { name: "Bontaz Automotive India Pvt. Ltd." },
  { name: "Wonjin Autoparts India Pvt. Ltd." },
  { name: "Daejung Moparts Pvt. Ltd." },
  { name: "Super Good Steels" },
  { name: "Mahle Engine Components" },
  { name: "Woory Automotive India" },
  { name: "Valeo Friction Materials" },
  { name: "Triumph International Private Limited" }
];
