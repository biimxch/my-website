import "./globals.css";
import { Montserrat, Prompt, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// โหลดฟอนต์ Montserrat สำหรับภาษาอังกฤษ
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

// โหลดฟอนต์ Prompt สำหรับภาษาไทย
const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "Chompunuch Portfolio",
  description: "UX/UI Designer & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={cn("scroll-smooth", montserrat.variable, prompt.variable, "font-sans", geist.variable)}>
      <body 
        className="bg-[#fafaf8] text-gray-900 antialiased"
        // 💡 เราใช้ style กำหนดลำดับฟอนต์ตรงนี้แทนการตั้งค่าใน config ไปเลยครับ
        style={{ fontFamily: 'var(--font-montserrat), var(--font-prompt), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}