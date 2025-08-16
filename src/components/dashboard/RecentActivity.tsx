import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    id: 1,
    student: "Emma Wilson",
    action: "Submitted assignment",
    subject: "Mathematics",
    time: "2 minutes ago",
    type: "assignment",
  },
  {
    id: 2,
    student: "John Smith",
    action: "Marked present",
    subject: "Physics",
    time: "15 minutes ago",
    type: "attendance",
  },
  {
    id: 3,
    student: "Sarah Johnson",
    action: "Grade updated",
    subject: "Chemistry",
    time: "1 hour ago",
    type: "grade",
  },
  {
    id: 4,
    student: "Mike Brown",
    action: "New enrollment",
    subject: "Biology",
    time: "2 hours ago",
    type: "enrollment",
  },
];

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "assignment":
      return "bg-secondary text-secondary-foreground";
    case "attendance":
      return "bg-primary text-primary-foreground";
    case "grade":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function RecentActivity() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {activity.student.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="font-medium">{activity.student}</p>
              <p className="text-sm text-muted-foreground">
                {activity.action} • {activity.subject}
              </p>
            </div>
            <div className="text-right space-y-1">
              <Badge className={getBadgeVariant(activity.type)}>
                {activity.type}
              </Badge>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}