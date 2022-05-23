import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutPage from "./container/AboutPage";
import GitHubPage from "./container/GitHubPage";
import HomePage from "./container/HomePage";
import { useEffect } from "react";
import ContactUsPage from "./container/ContactUsPage";
import Header from "./components/Home/Header";
function App() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
      );
      const response = await data.json();

      if (response && response.items) {
        console.log(response);
        setData(response.items);
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Router>
      <ContactUsPage open={openModal} setOpenModal={setOpenModal} />
      <Header setOpenModal={setOpenModal} />

      <Routes>
        <Route path="/comingSoon" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/github" element={<GitHubPage data={data} />} />
        <Route
          path="/contact"
          element={<ContactUsPage setOpenModal={setOpenModal} o="working" />}
        />
        <Route path="*" element={<Navigate to="/comingSoon" replace="/*" />} />
      </Routes>
    </Router>
  );
}

export default App;
