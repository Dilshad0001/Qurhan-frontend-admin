import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Admin/Login";
import { ToastContainer } from "react-toastify";
import SurahManagementModal from "./Admin/AdminDashboard";
import SurahListPage from "./pages/SurahListPage";
import SurahDetailPage from "./pages/SurahDetailPage";

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/Dashboard' element={<SurahManagementModal/>}/>
         <Route path='/surah' element={<SurahListPage/>}/>
          <Route path="/surah/:id" element={<SurahDetailPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
