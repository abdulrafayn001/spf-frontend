import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms for login and registration.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile view */}
      <div className="md:hidden flex flex-col min-h-screen">
        <div className="container p-6 sm:p-8 flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <span className="text-lg font-medium">
                Smart Personal Finance
              </span>
            </div>
          </div>
          <div className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex min-h-screen">
        <div className="relative hidden w-full max-w-[48%] flex-col bg-muted p-10 text-white dark:border-r md:flex lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Smart Personal Finance
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This app has revolutionized how I manage my finances.
                It&apos;s intuitive, powerful, and secure.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex-1 flex flex-col p-6 sm:p-8">
          <div className="flex-grow flex items-center justify-center">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
