import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './home/home';
import Header from './header/header';
import Login from './login/login';
import Sidebar from './sidebar/Sidebar';
import Search from './search/Search';
import UpdateFile from './update_file/UpdateFile';
import ManageFile from './manage_file/ManageFile';
import ManageAccount from './manage_account/ManageAccount';

function App() {


  const [convertedFiles, setConvertedFiles] = useState([]);

  const handleFileConvert = (file) => {
    setConvertedFiles([...convertedFiles, file]);
  };



  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mặc định chưa đăng nhập

  const handleLogin = () => {
    setIsAuthenticated(true); // Cập nhật trạng thái khi đăng nhập
    localStorage.setItem('isLoggedIn', 'true'); // Lưu trạng thái đăng nhập
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Cập nhật trạng thái khi đăng xuất
    localStorage.removeItem('isLoggedIn'); // Xóa thông tin trạng thái đăng nhập
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {isAuthenticated && <Header onLogout={handleLogout} />} {/* Truyền hàm đăng xuất cho Header */}
      <div style={{ display: 'flex' }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
            <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/search" element={isAuthenticated ? <Search /> : <Navigate to="/login" />} />
            <Route path="/update-file" element={isAuthenticated ? <UpdateFile /> : <Navigate to="/login" />} />
            <Route path="/manage-file" element={isAuthenticated ? <ManageFile /> : <Navigate to="/login" />} />
            <Route path="/manage-account" element={isAuthenticated ? <ManageAccount /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
















// import logo from './logo.svg';
// import './App.css';
// import Home from './home/home';
// import Header from './header/header';
// import Login from './login/login';
// import Sidebar from './sidebar/Sidebar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Thay đổi đây
// import Search from './search/Search'; // Component cho Tìm kiếm
// import UpdateFile from './update_file/UpdateFile'; // Component cho Cập nhật file
// import ManageFile from './manage_file/ManageFile'; // Component cho Quản lý file
// import ManageAccount from './manage_account/ManageAccount'; // Component cho Quản lý tài khoản

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         <div style={{ display: 'flex' }}>
//           <Sidebar />
//           <div style={{ flex: 1, padding: '20px' }}>
//             <Routes> {/* Thay đổi từ Switch thành Routes */}
//               <Route path="/home" element={<Home />} /> {/* Thay đổi cách truyền props */}
//               <Route path="/search" element={<Search />} />
//               <Route path="/update-file" element={<UpdateFile />} />
//               <Route path="/manage-file" element={<ManageFile />} />
//               <Route path="/manage-account" element={<ManageAccount />} />
//               <Route path="/" element={<Home />} /> {/* Mặc định hiển thị Home */}
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
