import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, DollarSign, Target } from "lucide-react";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full">
          <PlusIcon className="mr-2 h-4 w-4" /> Add Account
        </Button>
        <Button className="w-full">
          <DollarSign className="mr-2 h-4 w-4" /> Set Budget
        </Button>
        <Button className="w-full">
          <Target className="mr-2 h-4 w-4" /> Add Goal
        </Button>
      </CardContent>
    </Card>
  );
}
