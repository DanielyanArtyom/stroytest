import { useRouteError } from "react-router-dom";
import CustomLink from "./CustomLink";
import Layout from "./Layout";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <Layout>
      <h1 className="tw-text-3xl tw-mb-10">Error Boundary</h1>
      <CustomLink href="/"> Home</CustomLink>
    </Layout>
  );
};

export default ErrorBoundary;
