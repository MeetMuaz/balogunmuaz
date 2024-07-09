import { Inter } from "next/font/google";
import "../globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balogun Muaz — Software Engineer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* For Safari */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* For Android Chrome */}
        <meta name="theme-color" content="#101010" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
