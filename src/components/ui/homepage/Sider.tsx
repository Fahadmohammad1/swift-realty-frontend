"use client";
import { Sidebar } from "keep-react";
import logo from "@/assets/images/Logo.png";
import {
  Chat,
  Handbag,
  ShoppingBagOpen,
  ShoppingCart,
  SignIn,
  SquaresFour,
  UserPlus,
  Users,
} from "phosphor-react";

export const Sider = () => {
  return (
    <div className="flex ">
      <input
        type="checkbox"
        id="drawer-toggle"
        className="relative sr-only peer"
        defaultChecked
      />
      <label
        htmlFor="drawer-toggle"
        className="absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-indigo-500 rounded-lg peer-checked:rotate-180 peer-checked:left-64"
      >
        <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
        <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
      </label>
      <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Logo href="" img={`${logo.src}`} imgAlt="swift realty" />
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={<SquaresFour size={24} />}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Collapse
                icon={<ShoppingCart size={24} />}
                label="E-commerce"
              >
                <Sidebar.Item href="#" icon={<Handbag size={24} />}>
                  Products
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={<Chat size={24} />}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={<Users size={24} />}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={<ShoppingBagOpen size={24} />}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={<SignIn size={24} />}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="/" icon={<UserPlus size={24} />}>
                Back to Home
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};
