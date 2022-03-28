import React from "react";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";


function TopWebsitesToRefer() {
  return (
    <div>
      <Navbar />
      <main className="text-center flex flex-col items-center justify-content gap-10 mt-10">
        <h1 className="lg:text-7xl mb-7 mt-3 underline decoration-hecker text-xl text-white">
          Top Sites To Refer
        </h1>

        <Link
          to="/cybersecurity"
          className="p-3 border border-hecker text-white bg-black hover:bg-dark-hecker rounded-md"
        >
          Go Back
        </Link>

        <div className="flex flex-wrap gap-10">
          <ResourceCard
            resource_img_url="https://zsecurity.org/wp-content/uploads/2018/09/zs-top-left.png"
            resource_title="ZSecurity"
            resource_url="https://zsecurity.org/"
          />
          <ResourceCard
            resource_img_url="https://media-exp1.licdn.com/dms/image/C4E0BAQFnv4gI-bzgIw/company-logo_200_200/0/1640713604210?e=2147483647&v=beta&t=zKeSaApO21Y5EX0dOLN-Vgn6oEHphrISQecJ1kTaBK4"
            resource_title="Geeks For Geeks"
            resource_url="https://www.geeksforgeeks.org"
          />
          <ResourceCard
            resource_img_url="https://www.offensive-security.com/wp-content/themes/OffSec/assets/images/offsec-logo.svg"
            resource_title="Offensive Security"
            resource_url="https://www.offensive-security.com"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TopWebsitesToRefer;
