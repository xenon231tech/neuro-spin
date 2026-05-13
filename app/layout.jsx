import "./globals.css";

export const metadata = {
  title: "NEURO SPIN",
  description: "Farcaster Cyberpunk Mini App"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
