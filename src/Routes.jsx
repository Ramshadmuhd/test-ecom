import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Colors = React.lazy(() => import("pages/Colors"));
const Typography = React.lazy(() => import("pages/Typography"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/colors" element={<Colors />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
