import React, { FC } from "react";
import Durations from "./TableComponents/Durations";
import Rating from "./TableComponents/Rating";
import Tags from "./TableComponents/Tags";
import TotalChat from "./TableComponents/TotalChat";

const ReportTableComponents = {
  totalChats: {
    content: TotalChat,
  },
  durations: {
    content: Durations,
  },
  rating: {
    content: Rating,
  },
  tags: {
    content: Tags,
  },
} as any;

interface MyProps {
  tableType: string;
  report: any;
}

const Table: FC<MyProps> = ({ tableType, report }) => {
  const TableContent = ReportTableComponents[tableType].content;
  return (
    <div className="tw-relative tw-overflow-x-auto">
      <table className="tw-w-full tw-text-sm tw-text-left tw-rtl:text-right tw-text-gray-500 tw-dark:text-gray-400">
        <TableContent content={report.records} />
      </table>
    </div>
  );
};

export default Table;
