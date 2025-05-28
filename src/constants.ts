import { Manrope, Maven_Pro, Cormorant_Garamond } from "next/font/google";

export const manrope = Manrope({ subsets: ["latin"] });
export const maven = Maven_Pro({ subsets: ["latin"] });
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
