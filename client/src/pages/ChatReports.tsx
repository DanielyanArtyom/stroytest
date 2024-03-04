import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Table from "../components/Table";
import { Projects } from "../constants/projects";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  fetchTotalChatReports,
  getIsFetching,
  getTotalChats,
} from "../slices/reportsSlice";

const ChatReports = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);
  const dispatch = useAppDispatch();
  const totalChatsReports = useAppSelector(getTotalChats);
  const isFetching = useAppSelector(getIsFetching);
  const navigate = useNavigate();

  useEffect(() => {
    const pr = Projects.find((el) => el.id === Number(projectId));
    if (pr) {
      setProject(pr);
      dispatch(fetchTotalChatReports());
    } else {
      navigate("/");
    }
  }, []);

  if (isFetching || project === null) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <Navigation navigationRoute="chat" projectId={project.id} />

      <h1 className="tw-my-10 tw-text-center tw-uppercase">
        {project.projectName}
      </h1>

      <Table report={totalChatsReports} tableType="totalChats" />
    </Layout>
  );
};

export default ChatReports;
