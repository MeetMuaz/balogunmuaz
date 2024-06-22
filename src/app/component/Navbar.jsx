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
      <ul className="flex space-x-4 px-2 py-2 rounded-full" style={{
        outlineOffset: "-1px",
        backgroundColor: "rgba(242, 242, 242, .04)",
        outline: "1px solid rgba(242, 242, 242, .05)",
        boxShadow: "0 40px 80px rgba(0, 0, 0, .5)",
        position: "relative",
      }}>
        <li className="text-[#f2f2f2] text-[14px] px-4 py-2 rounded-full hover:bg-[#333]">
          <Link href="#">Work</Link>
        </li>
        <li className="text-[#f2f2f2] text-[14px] px-4 py-2 rounded-full hover:bg-[#333]">
          <Link href="#">Info</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="https://linkedin.com/in/meetmuaz" className="flex items-center px-4 py-2 rounded-full hover:bg-[#333]">
            <span className="mr-1">Linkedin</span>
            <BsArrowUpRight />
          </Link>
        </li>
        <li className="text-[#f2f2f2] text-[14px]">
          <Link href="https://drive.google.com/file/d/1shYcvHnLDqW9uNrD0bHGImQQ-hmF6fME/view?usp=sharing" className="flex items-center px-4 py-2 rounded-full hover:bg-[#333]">
            <span className="mr-1">Resume </span>
            <BsArrowUpRight />
          </Link>
        </li>
      </ul>
    </div>
  );
}
