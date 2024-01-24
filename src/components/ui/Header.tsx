"use client";
import Image from "next/image";
import { Navbar } from "keep-react";
import logo from "../../assets/images/Logo.png";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="border-b border-[#0000004D]">
      <Navbar className="h-[92px] flex items-center">
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container className="flex items-center">
            <Navbar.Brand>
              <Image src={logo} alt="keep" width="150" height="24" />
            </Navbar.Brand>

            <Navbar.Container
              tag="ul"
              className="lg:flex hidden items-center justify-between gap-[30px] text-[14px] ml-[103px]"
            >
              <Link href="/" className="text-[14px]">
                Home
              </Link>
              <Link href="/">Properties</Link>
              <Link href="/">Services</Link>
              <Link href="/">About Us</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">FAQs</Link>
            </Navbar.Container>
            <Navbar.Collapse collapseType="sidebar">
              <Navbar.Container tag="ul" className="flex flex-col gap-5">
                <Navbar.Link linkName="Home" />
                <Navbar.Link linkName="Properties" />
                <Navbar.Link linkName="Services" />
                <Navbar.Link linkName="About Us" />
                <Navbar.Link linkName="Blog" />
                <Navbar.Link linkName="Contact Us" />
                <Navbar.Link linkName="FAQ's" />
              </Navbar.Container>
            </Navbar.Collapse>
          </Navbar.Container>

          <Navbar.Container className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-[#00000066] w-[200px] px-[10px] py-[7px] rounded-sm mr-[32px] text-xs"
            />

            <button className="px-[21px] py-[7px] bg-white border border-srPrimary text-srPrimary rounded-sm text-[10px] font-medium">
              Log in
            </button>
            <button className="px-[21px] py-[8px] bg-srPrimary text-white rounded-sm text-[10px] font-medium">
              Newsletter
            </button>
            <Navbar.Toggle />
          </Navbar.Container>
        </Navbar.Container>
      </Navbar>
    </nav>
  );
};
