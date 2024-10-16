import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

export default function FinancialOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Financial Overview
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Summary of your current financial status</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              Net Worth
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-green-400">
              $120,000
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              Monthly Income
            </dt>
            <dd className="mt-1 text-3xl font-semibold">$5,000</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-muted-foreground">
              Expenses
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-red-400">$3,500</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
