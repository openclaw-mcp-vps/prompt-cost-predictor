import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Predictor – Estimate AI Prompt Costs Before You Run Them",
  description: "Estimate token usage and costs for AI prompts across OpenAI, Anthropic, and more before execution. Save money on LLM API calls."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aeb07d9c-53fa-4aa8-85d0-ec4dee3953f5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
