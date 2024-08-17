import { Inter, Marcellus } from "next/font/google";

export const marcellus = Marcellus({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({ subsets: ["latin"] });
