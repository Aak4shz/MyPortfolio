import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dossier & Introduction — Aakash | Linux Systems & Security",
  description:
    "Engineering dossier of Aakash — Final-year BCA student at Ranchi University, Arch Linux daily driver, 24/7 homelab architect, and aspiring Linux Systems Administrator.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
