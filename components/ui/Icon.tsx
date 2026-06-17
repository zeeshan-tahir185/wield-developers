// Central icon map — string names from data files resolve to lucide-react icons.
// Keeping a curated map (rather than dynamic import) keeps the bundle lean and typed.

import {
  Wind,
  Sun,
  Construction,
  Building2,
  Network,
  ShieldCheck,
  ClipboardList,
  BadgeCheck,
  Trophy,
  ArrowUpDown,
  Waypoints,
  HardHat,
  LifeBuoy,
  Flame,
  Stethoscope,
  Users,
  Lightbulb,
  Scale,
  TrendingUp,
  Gem,
  Zap,
  Cpu,
  Gauge,
  Factory,
  CheckCircle2,
  Power,
  CircuitBoard,
  Wrench,
  Settings,
  Cable,
  PlugZap,
  Code2,
  Truck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wind,
  Sun,
  Construction,
  Building2,
  Network,
  ShieldCheck,
  ClipboardList,
  BadgeCheck,
  Trophy,
  ArrowUpDown,
  Waypoints,
  HardHat,
  LifeBuoy,
  Flame,
  Stethoscope,
  Users,
  Lightbulb,
  Scale,
  TrendingUp,
  Gem,
  Zap,
  Cpu,
  Gauge,
  Factory,
  CheckCircle2,
  Power,
  CircuitBoard,
  Wrench,
  Settings,
  Cable,
  PlugZap,
  Code2,
  Truck,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name] ?? CheckCircle2;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
