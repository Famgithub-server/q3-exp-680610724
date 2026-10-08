import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards"
import {LayoutGrid, Summary} from "lucide-react"


export function DashboardTabs() {
  return (
    <div className="w-full">
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger className="text-xl" value="overview"><Summary/>Overview</TabsTrigger>
        <TabsTrigger className="text-xl" value="category"><LayoutGrid/> By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
      <OverviewCards/>
      </TabsContent>
      <TabsContent value="category">
      <CategoryCards/>
      </TabsContent>
      </Tabs>
    </div>
  );
}
