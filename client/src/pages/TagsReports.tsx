import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import Table from "../components/Table";
import { Projects } from "../constants/projects";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchTagsReport, getIsFetching, getTags } from "../slices/reportsSlice";

const TagsReports = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);
  const dispatch = useAppDispatch();
  const tagsReport = useAppSelector(getTags);
  const isFetching = useAppSelector(getIsFetching);
  const navigate = useNavigate();


  useEffect(() => {
    const pr = Projects.find((el) => el.id === Number(projectId));
    if (pr) {
      setProject(pr);
      dispatch(fetchTagsReport());
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
      <Navigation navigationRoute="tags" projectId={project.id} />

      <h1 className="tw-my-10 tw-text-center tw-uppercase">
        {project.projectName}
      </h1>

      <Table report={tagsReport} tableType="tags" />
    </Layout>
  );
};

export default TagsReports;
