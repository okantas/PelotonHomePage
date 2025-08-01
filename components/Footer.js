import React from "react";
import Image from "next/image";
import PhoneIcon from "@/public/PhoneIcon.svg";
import MessageIcon from "@/public/MessageIcon.svg";
import QuestionMark from "@/public/QuestionMarkIcon.svg";
import Facebook from "@/public/FaceBookIcon.svg";
import Instagram from "@/public/InstagramIcon.svg";
import Twitter from "@/public/TwitterIcon.svg";
import Youtube from "@/public/YoutubeIcon.svg";
import Apple from "@/public/Apple.svg";
import GooglePlay from "@/public/GooglePlay.svg";
import Amazon from "@/public/Amazon.svg";
import Roku from "@/public/Roku.svg";
import UsaIcon from "@/public/UsaFlag.svg";

export default function Footer() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-[200px] px-10 pt-10 xl:flex-row ">
          <div className="flex text-[14px] gap-[30px] lg:gap-[80px] ">
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
          <div id="rightPart" className="flex flex-col gap-[20px]">
            <h1 className="font-bold text-[12px]">Sign up to get the latest</h1>
            <div className="flex gap-[10px]">
              <input
                type="text"
                placeholder="Your E-mail"
                className="border border-[#888B93] text-base rounded-md py-[17px] pl-[15px] w-[270px]"
              />
              <a
                href="#"
                className="py-[19px] bg-[#DF1C2F] px-6 text-base font-bold text-white rounded-md"
              >
                Submit
              </a>
            </div>
            <p className="text-[12px] text-[#181A1D]">
              By providing your email address, you agree to receive marketing
              <br /> communications from Peloton.
              <br />
              <br />
              For more about how we use your information, see our Privacy
              Policy.
            </p>
            <div id="contactInformations" className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px] text-[13px] font-bold">
                <Image alt="Phone" src={PhoneIcon} />
                <p>1⁠-⁠866⁠-⁠679⁠-⁠9129</p>
              </div>
              <div className="flex gap-[10px] text-[13px] font-bold">
                <Image alt="Message" src={MessageIcon} />
                <p>Start a Live Chat</p>
              </div>
              <div className="flex gap-[10px] text-[13px] font-bold">
                <Image alt="QuestionMark" src={QuestionMark} />
                <p>Visit Support Center</p>
              </div>
            </div>

            <div id="applications" className="flex gap-[16px] pb-20">
              <Image alt="Instagram" src={Instagram} />
              <Image alt="Twitter" src={Twitter} />
              <Image alt="Facebook" src={Facebook} />
              <Image alt="Youtube" src={Youtube} />
            </div>
          </div>
        </div>
        <div id="stores" className="flex flex-col gap-5 items-center pb-10">
          <p className="text-[13px] font-bold tracking-wide">
            Get The Peloton App
          </p>
          <div className="flex flex-col gap-5 md:flex-row">
            <a href="#">
              <Image alt="AppleStore" src={Apple} />
            </a>
            <a href="#">
              <Image alt="GoogleStore" src={GooglePlay} />
            </a>
            <a href="#">
              <Image alt="AmazonStore" src={Amazon} />
            </a>
            <a href="#">
              <Image alt="Roku" src={Roku} />
            </a>
          </div>
        </div>
        <div id="lastOfFooter">
          <div className="flex gap-5 items-center justify-center tracking-widest">
            <Image alt="Usa" src={UsaIcon} />
            <p className="text-[12px] font-bold">United States ($ USD)</p>
          </div>
          <ul className="flex flex-col items-center text-[13px] gap-5 justify-center text-[#181A1D] py-8 md:flex-row ">
            <a href="#">
              <li>Privacy Policy</li>
            </a>

            <a href="#">
              <li>Terms of Service</li>
            </a>
            <a href="#">
              <li>Membership Terms</li>
            </a>
            <a href="#">
              <li>IP Policy</li>
            </a>
            <a href="#">
              <li>Accessibility</li>
            </a>
            <a href="#">
              <li>California Transparency Act</li>
            </a>
            <a href="#">
              <li>Cookie Settings</li>
            </a>
            <a href="#">
              <li className="font-light">
                © Peloton 2012-2023, Peloton Interactive, Inc. All rights
                reserved.
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
