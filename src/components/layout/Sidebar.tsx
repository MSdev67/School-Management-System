import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  Settings,
  Home,
  UserCheck,
  ClipboardList,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/", active: true },
  { icon: Users, label: "Students", href: "/students" },
  { icon: GraduationCap, label: "Teachers", href: "/teachers" },
  { icon: BookOpen, label: "Classes", href: "/classes" },
  { icon: Calendar, label: "Schedule", href: "/schedule" },
  { icon: UserCheck, label: "Attendance", href: "/attendance" },
  { icon: ClipboardList, label: "Grades", href: "/grades" },
  { icon: BarChart3, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-card border-r border-border transition-transform duration-300 z-40 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11",
                item.active && "bg-gradient-primary text-primary-foreground shadow-elegant"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
}