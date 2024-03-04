import React, { FC } from "react";
import { ITag } from "../../types/reportTypes";

interface MyProps {
  content: ITag;
}

const Tags: FC<MyProps> = ({ content }) => {
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
            Name
          </th>
          <th scope="col" className="tw-px-6 tw-py-3">
            Count
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(content).map((tag) => (
          <tr
            key={tag}
            className="tw-bg-white tw-border-b tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-text-center"
          >
            <td className="px-6 py-4">{tag}</td>
            {Object.keys(content[tag]).map((el, idx) => (
              <React.Fragment key={`${el}_${content[tag][el]}_${idx}`}>
                <td className="px-6 py-4">{el}</td>
                <td className="px-6 py-4">{content[tag][el]}</td>
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Tags;
