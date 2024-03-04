import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MyProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: FC<MyProps> = ({ href, children }) => (
  <Link
    to={href}
    className="tw-bg-blue-400 tw-text-white tw-py-3 tw-px-5 tw-rounded-md hover:tw-bg-blue-800 tw-transition-all"
  >
    {children}
  </Link>
);

export default CustomLink;
