import React from 'react';
import {
  Home,
  Sparkles,
  Utensils,
  Layers,
  Bed,
  Sofa,
  Bath,
  Grid,
  Palette,
  Briefcase,
  Building2,
  Lamp,
  ArrowUpRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Compass,
  Award,
  ShieldCheck,
  Feather,
  Sliders
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Home,
  Sparkles,
  Utensils,
  Layers,
  Bed,
  Sofa,
  Bath,
  Grid,
  Palette,
  Briefcase,
  Building2,
  Lamp,
  ArrowUpRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Compass,
  Award,
  ShieldCheck,
  Feather,
  Sliders
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5", strokeWidth = 1.25 }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} strokeWidth={strokeWidth} />;
};
