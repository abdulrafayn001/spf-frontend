import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const transactions = [
  {
    id: 1,
    date: "2023-05-15",
    description: "Salary",
    amount: 3000,
    type: "income",
  },
  {
    id: 2,
    date: "2023-05-14",
    description: "Groceries",
    amount: 150,
    type: "expense",
  },
  {
    id: 3,
    date: "2023-05-13",
    description: "Utilities",
    amount: 200,
    type: "expense",
  },
];

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">
                  {transaction.date}
                </p>
              </div>
              <span
                className={`font-semibold ${
                  transaction.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {transaction.type === "income" ? "+" : "-"}${transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
