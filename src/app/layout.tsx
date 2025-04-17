// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Members",
  description: "members page",
};

type LayoutProps = {
  children: ReactNode;
  comments: ReactNode;
  members: ReactNode;
};

export default function RootLayout({
  children,
  comments,
  members,
}: LayoutProps) {
  return (
    <html>
      <body className="flex gap-8 p-10">
        <section>{children}</section>
        <section>{members}</section>
        <section>{comments}</section>
      </body>
    </html>
  );
}
