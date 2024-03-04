import React, { FC } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constants/navigation";

interface MyProps {
  navigationRoute: string;
  projectId: string;
}

const Navigation: FC<MyProps> = ({ navigationRoute, projectId }) => {
  return (
    <header>
      <nav>
        <ul className="tw-flex tw-justify-between tw-items-center tw-bg-blue-400 tw-rounded-md">
          {navigation.map((el) => (
            <li
              key={el.route}
              className={`tw-text-white tw-p-5 ${
                el.route === navigationRoute ? "tw-underline" : ""
              }`}
            >
              <Link to={`/project/${projectId}/${el.route}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
