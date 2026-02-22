import Footer from "@/components/universal/PortfolioFooter";
import Navbar from "@/components/universal/PortfolioNavbar";
import ModalPopup from "@/components/universal/PopUp/ModalPopUp";
import { LayoutProps } from "@/types/LayoutProps";

import { asString } from "html2canvas/dist/types/css/types/color";

export const metadata = {
  title:
    "Bayshore Communication is your all-in-one partner for accelerating business growth",
  description:
    "Welcome to Bayshore Communication!! Grow your brand or business with us. Whether you need digital marketing services, or software solutions, we've you covered.",
  metadataBase: new URL("https://www.bayshorecommunication.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {/* <ModalPopup /> */}
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
