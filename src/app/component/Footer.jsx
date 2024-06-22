import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <hr class="h-px border-0 bg-[#BCBCBC] w-full mt-64" />
      <div className="max-w-4xl w-full mx-auto flex justify-between px-16 pt-24">
        <div>
          <Link href="/">
            <Image height="48" width="48" src="/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="flex space-x-20">
          <ul className="space-y-6">
            <li className="text-[9px] text-[#BCBCBC]">MAIN</li>
            <li className="text-[#f2f2f2] text-[16px]">
              <Link href="/work">Work</Link>
            </li>
            <li className="text-[#f2f2f2] text-[16px]">
              <Link href="/info">Info</Link>
            </li>
          </ul>

          <ul className="space-y-6">
            <li className="text-[9px] text-[#BCBCBC]">CONTACT</li>
            <li className="text-[#f2f2f2] text-[16px]">
              <Link href="#" className="flex items-center">
                <span className="mr-1">Linkedin</span>
                <BsArrowUpRight />
              </Link>
            </li>
            <li className="text-[#f2f2f2] text-[16px]">
              <Link href="#" className="flex items-center">
                <span className="mr-1">Resume </span>
                <BsArrowUpRight />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-4xl w-full mx-auto flex justify-between items-end px-16 pb-24">
        <div>
          <span className="text-[16px] text-[#f2f2f2] block">
            © 2024 Balogun Muaz. All Rights Reserved.
          </span>
          <span className="text-[14px] text-[#BCBCBC] block">
          Made with a 😊 and Cocoa Teas (50% sugar, hot water).
          </span>
        </div>
        <div>
          <span className="text-[12px] text-[#BCBCBC]">
            Last updated by Balogun on April 15, 2024, 10:50 PM EST
          </span>
        </div>
      </div>
    </>
    //  </div>
  );
}
