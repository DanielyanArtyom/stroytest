import CustomLink from "./components/CustomLink";
import Layout from "./components/Layout";
import { Projects } from "./constants/projects";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <Layout>
      <h1 className="tw-text-center tw-text-lg tw-font-bold tw-mb-10">
        Hello world
      </h1>

      <div className="tw-flex tw-flex-col tw-max-w-md tw-justify-center tw-items-center tw-flex-wrap tw-gap-10 tw-mx-auto">
        {Projects.map((el) => (
          <CustomLink key={el.id} href={`${ROUTES.project}/${el.id}/chat`}>
            {el.projectName}
          </CustomLink>
        ))}
      </div>
    </Layout>
  );
}

export default App;
