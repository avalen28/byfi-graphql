import Dashboard from "./views/Dashboard";
import { Route, Routes } from "react-router-dom";
import UserDetail from "./views/UserDetail";
import PostDetail from "./views/PostDetail";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/user/detail" element={<UserDetail />} />
      <Route path="/post/detail" element={<PostDetail />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
