export const metadata = { title: "Admin — TORVEXIA" };

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-white antialiased" style={{ WebkitFontSmoothing: "antialiased" }}>
        {children}
      </body>
    </html>
  );
}
