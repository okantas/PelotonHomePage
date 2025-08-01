import React from "react";
import Image from "next/image";
import TryTheApp from "@/public/TryTheApp.svg";

export default function TryApp() {
  return (
    <>
      <div className="flex flex-col justify-center text-center items-center">
        <div className="flex flex-col items-center justify-center gap-40 pt-[120px] md:flex-row">
          <div className="flex flex-col gap-[15px]">
            <p className="text-[12px] text-[#181A1D] font-bold">Peloton App</p>
            <p className="text-[28px] text-[#181A1D] font-light">
              Try free for 30 days
            </p>
            <p className="font-light text-[16px] text-[#65666A]">
              Take classes at home, in the gym, or on the <br /> go with no
              equipment needed.
            </p>
            <a className="w-60 h-12 bg-[#DF1C2F] justify-center items-center flex text-[#FFFFFF] font-bold text-[11px] rounded-md">
              TRY THE APP
            </a>
            <p className="font-light text-[13px] text-[#65666A]">
              New App trials only. $12.99/mo after. Terms apply.
            </p>
          </div>
          <div className="lg:w-[600px] lg:h-[600px] md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]">
            <Image src={TryTheApp} alt="image" />
          </div>
        </div>
        <div className="text-[13px] text-[#65666A] font-light pt-32 px-[100px] pb-10 text-left">
          **All-Access Membership separate for Peloton Bike, Bike+, Tread and
          Row; Guide Membership separate for Peloton Guide. Offer ends April 3,
          2023. Discount of $400 USD applies to purchases of Peloton Bike
          Starter, Bike Ultimate, Peloton Bike+ Starter, Bike+ Ultimate, Peloton
          Tread Select, Tread Ultimate, Peloton Row Select, or Row Ultimate
          only. Discount of $150 USD applies to purchases of Peloton Guide
          Starter, Guide Select, or Guide Ultimate only. Offer applied at
          checkout. No substitutions. Peloton may change, cancel or limit offers
          at any time. Cannot be combined with certain other offers. Void where
          prohibited. Not transferable. <br />
          <br />
          While supplies last. No cash value. Not valid outside the United
          States. If the hardware purchased is returned for a refund but you do
          not return the entire package (including accessories), you will be
          refunded the cost of the applicable hardware less the cost of the
          accessories you have kept and the hardware discount (as applicable).
          *Limited time offer: starts on March 16, 2023 and ends on April 2,
          2023. Purchase price of $995 USD for Peloton Certified Refurbished
          Bike (delivery and set-up included); applicable sales tax or
          accessories separate. Additional delivery fees and/or restrictions may
          apply in remote areas, which may include Alaska, Hawaii, Puerto Rico,
          U.S Virgin Islands, and ferry-only accessible locations. All-Access
          Membership ($44/month) separate. While supplies last; all sales are
          final. Peloton may cancel, change or limit offers at any time. Limited
          warranty included, see terms here. Extended warranties may be
          purchased separately.
          <br />
          <br /> For additional product specifications, see here for the product
          manual. Cannot be combined with certain other offers. Not
          transferable. Void where prohibited. U.S. only. ¹Your rate will be 0%
          APR or 4.99% APR based on credit, and is subject to an eligibility
          check. For example, a $2,495 Bike+ might cost $207.92/mo over 12
          months at 0% APR. Payment options through Affirm are provided by these
          lending partners: affirm.com/lenders. Options depend on your purchase
          amount, and a down payment may be required. ²Program only available
          for the original Peloton Bike and Peloton Bike+ in the contiguous 48
          states and may not be available in certain remote locations. Peloton
          Bike/Bike+ fee and cost of All-Access Membership billed automatically
          to your payment method in equal monthly installments until canceled.
          Can be canceled anytime by contacting support@onepeloton.com, but all
          amounts paid are nonrefundable. Cannot be combined with certain other
          offers. Void where prohibited. Peloton may modify, suspend or cancel
          the program at any time for any or no reason. See Terms and Conditions
          for details. ³New App Members Only. Terms apply. Credit card required.
          After your free trial, App Membership is $12.99/mo. Cancel anytime
          before free trial ends. <br />
          <br />
          ⁴Program only available for the Peloton Bike and Peloton Bike+ in the
          contiguous 48 states and may not be available in remote locations.
          Credit card required. Cancel anytime, provided that any amounts paid
          are non-refundable. Void where prohibited. See additional terms at
          www.onepeloton.com/rental-terms. ⁵Peloton Guide Membership separate:
          $24/mo for Guide-only Members. First time Bike, Bike+, Tread, or Row
          purchasers only. 1 trial per household. Upfront payment required.
          Return within 30 days of delivery for full refund, provided that
          interest amounts paid to Peloton financing partners may not be
          refunded. Only eligible in 48 contiguous states. Full terms at
          onepeloton.com/home-trial.
        </div>
      </div>
    </>
  );
}
