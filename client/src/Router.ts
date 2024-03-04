import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundy";
import { ROUTES } from "./constants/routes";
import ChatReports from "./pages/ChatReports";
import DurationReports from "./pages/DurationReports";
import RatingReports from "./pages/RatingReports";
import TagsReports from "./pages/TagsReports";

export const Router = createBrowserRouter([
  {
    path: ROUTES.home,
    Component: App,
    ErrorBoundary: ErrorBoundary,
  },
  {
    path: `${ROUTES.project}/:projectId`,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "chat",
        Component: ChatReports,
      },
      {
        path: "duration",
        Component: DurationReports,
      },
      {
        path: "rating",
        Component: RatingReports,
      },
      {
        path: "tags",
        Component: TagsReports,
      },
    ],
  },
]);
