import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <NavigationBar />
    </div>
  );
}

export default App;
