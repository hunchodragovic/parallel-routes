// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Members",
  description: "members page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="flex gap-8 p-10">{children}</body>
    </html>
  );
}
