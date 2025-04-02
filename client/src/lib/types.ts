export interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  link: string;
  tags: string[];
  icon: React.ReactNode;
  gradient: string;
  textColor: string;
  badgeColor: string;
}

export interface EducationItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  highlights: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
  icon: React.ReactNode;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

export interface Skill {
  label: string;
  percentage: number;
}
