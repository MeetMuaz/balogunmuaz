import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full mb-5 pt-16 px-16">
      <ul>
        <li>
          <Link href="#">
            <div className="flex space-x-2">
              <Image height="48" width="48" src="/logo.svg" alt="logo" />
              <div className="flex flex-col">
                <span className="text-[#f2f2f2] text-[20px]">Balogun Muaz</span>
                <span className="text-[#BCBCBC] text-[12px]">
                  Software Engineer
                </span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="#">Work</Link>
        </li>
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="#">Info</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="#" className="flex items-center">
            <span className="mr-1">Linkedin</span>
            <BsArrowUpRight />
          </Link>
        </li>
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="#" className="flex items-center">
            <span className="mr-1">Resume </span>
            <BsArrowUpRight />
          </Link>
        </li>
      </ul>
    </div>
  );
}
