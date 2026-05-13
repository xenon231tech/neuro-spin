import "./globals.css";

export const metadata = {
  title: "Neuro Spin",
  description: "Cyberpunk NFT Spin Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
