import React, { FC } from "react";
import { IChat } from "../../types/reportTypes";

interface MyProps {
  content: IChat;
}

const TotalChat: FC<MyProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <>
      <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 tw-dark:bg-gray-700 tw-dark:text-gray-400">
        <tr className="tw-text-center">
          <th scope="col" className="tw-px-6 tw-py-3">
            Date
          </th>
          <th scope="col" className="tw-px-6 tw-py-3">
            Total Count
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(content).map((chat) => (
          <tr
            key={chat}
            className="tw-bg-white tw-border-b tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-text-center"
          >
            <td className="px-6 py-4">{chat}</td>
            <td className="px-6 py-4">{content[chat].total}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TotalChat;
