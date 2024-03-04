import React, { FC } from "react";
import { IRating } from "../../types/reportTypes";

interface MyProps {
  content: IRating;
}

const Rating: FC<MyProps> = ({ content }) => {
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
            Count
          </th>
          <th scope="col" className="tw-px-6 tw-py-3">
            Bad Rating
          </th>
          <th scope="col" className="tw-px-6 tw-py-3">
            Good Rating
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(content).map((duration) => (
          <tr
            key={duration}
            className="tw-bg-white tw-border-b tw-dark:bg-gray-800 tw-dark:border-gray-700 tw-text-center"
          >
            <td className="px-6 py-4">{duration}</td>
            <td className="px-6 py-4">{content[duration].count}</td>
            <td className="px-6 py-4">{content[duration].badRating}</td>
            <td className="px-6 py-4">{content[duration].goodRating}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Rating;
