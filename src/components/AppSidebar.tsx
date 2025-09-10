import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Home, 
  User, 
  Lightbulb, 
  Users, 
  MessageCircle, 
  Hash, 
  TrendingUp,
  Code,
  Star,
  Settings
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const AppSidebar = () => {
  const location = useLocation();

  const mainNavItems = [
    { path: "/dashboard", icon: Home, label: "Dashboard" },
    { path: "/ideas", icon: Lightbulb, label: "Ideas Hub" },
    { path: "/teams", icon: Users, label: "Team Matching" },
    { path: "/community", icon: MessageCircle, label: "Community" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  const communityChannels = [
    { id: "general", name: "general", unread: 0 },
    { id: "announcements", name: "announcements", unread: 2 },
    { id: "web-dev", name: "web-dev", unread: 0 },
    { id: "ai-ml", name: "ai-ml", unread: 5 },
    { id: "mobile-dev", name: "mobile-dev", unread: 0 },
    { id: "blockchain", name: "blockchain", unread: 1 },
    { id: "design", name: "design", unread: 0 },
    { id: "career-advice", name: "career-advice", unread: 3 },
    { id: "random", name: "random", unread: 0 }
  ];

  const trendingTopics = [
    "#hackathon2024",
    "#react-tips", 
    "#job-opportunities"
  ];

  return (
    <Sidebar variant="inset" className="border-r border-gray-800">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-2">
          <motion.img
            src="/logo.png"
            alt="Hackora Logo"
            className="h-8 w-auto"
            whileHover={{ scale: 1.05 }}
          />
          <span className="text-xl font-bold">Hackora</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link to={item.path} className="flex items-center space-x-3">
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Community Channels - Only show on community page */}
        {location.pathname === "/community" && (
          <SidebarGroup>
            <SidebarGroupLabel>Channels</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {communityChannels.map((channel) => (
                  <SidebarMenuItem key={channel.id}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={`/community?channel=${channel.id}`}
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center space-x-2">
                          <Hash className="w-4 h-4" />
                          <span>{channel.name}</span>
                        </div>
                        {channel.unread > 0 && (
                          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                            {channel.unread}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Team Matching Filters - Only show on teams page */}
        {location.pathname === "/teams" && (
          <SidebarGroup>
            <SidebarGroupLabel>Quick Filters</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {["React", "Python", "AI/ML", "Design"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Experience</h4>
                  <div className="space-y-1">
                    {["Beginner", "Intermediate", "Advanced"].map((level) => (
                      <div key={level} className="text-sm text-gray-400 hover:text-white cursor-pointer">
                        {level}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* Trending Topics - Only show on community page */}
        {location.pathname === "/community" && (
          <SidebarGroup>
            <SidebarGroupLabel>Trending</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-2">
                {trendingTopics.map((topic) => (
                  <div key={topic} className="flex items-center space-x-2 text-gray-400 hover:text-white cursor-pointer">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>1,247 members online</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
