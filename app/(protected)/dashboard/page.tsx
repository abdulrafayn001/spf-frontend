import { Metadata } from "next";

import FinancialOverview from "./_components/financial-overview";
import ProfileCompletion from "./_components/profile-completion";
import QuickActions from "./_components/quick-actions";
import RecentTransactions from "./_components/recent-transactions";

export const metadata: Metadata = {
  title: "Dashboard | Smart Personal Finance",
  description: "View your financial overview and recent activity",
};

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Welcome back, John!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinancialOverview />
        <ProfileCompletion />
        <QuickActions />
        <RecentTransactions />
      </div>
    </>
  );
}
