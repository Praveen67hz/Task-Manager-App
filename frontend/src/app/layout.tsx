import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Full Stack Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}