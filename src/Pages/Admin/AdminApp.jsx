import { Routes, Route } from "react-router-dom";

const AdminApp = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<>Hi. I'm admin</>} />
      </Routes>
    </div>
  );
};

export default AdminApp;
