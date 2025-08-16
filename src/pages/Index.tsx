import { Layout } from "@/components/layout/Layout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, UserCheck, TrendingUp, Calendar } from "lucide-react";
import heroImage from "@/assets/school-hero.jpg";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="relative h-48 rounded-xl overflow-hidden shadow-elegant">
          <img 
            src={heroImage} 
            alt="School Management Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white">
                Welcome to SchoolManager
              </h1>
              <p className="text-lg text-white/90">
                Streamline your educational institution management
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Students"
            value="1,234"
            icon={Users}
            trend="+12% from last month"
            trendUp={true}
          />
          <StatsCard
            title="Teachers"
            value="87"
            icon={GraduationCap}
            trend="+3 new this month"
            trendUp={true}
          />
          <StatsCard
            title="Active Classes"
            value="42"
            icon={BookOpen}
            trend="6 classes today"
          />
          <StatsCard
            title="Attendance Rate"
            value="94.5%"
            icon={UserCheck}
            trend="+2.1% from last week"
            trendUp={true}
          />
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>

          {/* Quick Actions & Calendar */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="font-medium">Math Class</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 10:30 AM</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary">
                  <p className="font-medium">Physics Lab</p>
                  <p className="text-sm text-muted-foreground">11:00 AM - 12:30 PM</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="font-medium">Staff Meeting</p>
                  <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Performance Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Student Satisfaction</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-secondary h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Class Completion Rate</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Assignment Submission</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
