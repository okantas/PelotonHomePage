import React from "react";

export default function Footer() {
  return (
    <>
      <div>
        <div>
          <div className="flex text-[14px] gap-[80px]">
            <div className="flex flex-col gap-[35px]">
              <p>Learn</p>
              <div className="flex flex-col gap-[10px] text-[#65666A]">
                <a>Home Trial</a>
                <a>Membership</a>
                <a>Refurbished Bikes</a>
                <a>Financing</a>
                <a>Instructors</a>
                <a>Corporate Wellnes</a>
              </div>
            </div>
            <div className="flex flex-col gap-[35px] text-[#222529]">
              <p>About</p>
              <div className="flex flex-col gap-[10px] text-[#65666A]">
                <a>Our Story</a>
                <a>Team</a>
                <a>Careers</a>
                <a>Press</a>
                <a>Global</a>
                <a>Blog</a>
                <a>Investors</a>
                <a>Our Pledge</a>
              </div>
            </div>
            <div className="flex flex-col gap-[35px]">
              <a>Visit Us</a>
              <div className="flex flex-col gap-[10px] text-[#65666A]">
                <a>Showrooms</a>
                <a>Commercial Bikes</a>
                <a>Hotel Finder</a>
                <a>Book a Test Class</a>
                <a>Studio</a>
              </div>
            </div>
            <div className="flex flex-col gap-[35px]">
              <p>Support</p>
              <div className="flex flex-col gap-[10px] text-[#65666A]">
                <a>Contact Peloton</a>
                <a>Member Support Center</a>
                <a>Return Policy</a>
                <a>Warranties & Protection plans</a>
                <a>Shipping</a>
                <a>Product Recalls</a>
                <a>Security</a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </>
  );
}
