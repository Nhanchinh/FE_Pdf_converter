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
import BacktoLogin from './login/backtologin/BacktoLogin';

function App() {
  const [userFiles, setUserFiles] = useState([]);
  const [guestFiles, setGuestFiles] = useState([]);
  const [convertedFiles, setConvertedFiles] = useState([]);
  const [fileManage, setFileManage] = useState([]);
  const [authStatus, setAuthStatus] = useState(null); // null, 'user', or 'guest'

  const handleFileConvert = (file) => {
    if (authStatus === 'user') {
      setUserFiles([...userFiles, file]);
    } else if (authStatus === 'guest') {
      setGuestFiles([...guestFiles, file]);
    }
  };

  const handleLogin = () => {
    setAuthStatus('user');
    localStorage.setItem('authStatus', 'user');
  };

  const handleGuestLogin = () => {
    setAuthStatus('guest');
    localStorage.setItem('authStatus', 'guest');
  };

  const handleLogout = () => {
    setAuthStatus(null);
    localStorage.removeItem('authStatus');
    setConvertedFiles([]); // Đặt lại danh sách file khi đăng xuất
  };


  const updateFiles = (newFiles) => {
    setFileManage(newFiles);
  };

  useEffect(() => {
    setConvertedFiles(authStatus === 'user' ? userFiles : authStatus === 'guest' ? guestFiles : []);
  }, [authStatus, userFiles, guestFiles]);

  useEffect(() => {
    const savedAuthStatus = localStorage.getItem('authStatus');
    if (savedAuthStatus) {
      setAuthStatus(savedAuthStatus);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} onGuestLogin={handleGuestLogin} />} />
      </Routes>

      {(authStatus === 'user' || authStatus === 'guest') && <Header onLogout={handleLogout} />}
      <div style={{ display: 'flex' }}>
        {(authStatus === 'user' || authStatus === 'guest') && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/home" element={<Home onFileConvert={handleFileConvert} />} />
            <Route path="/search" element={<Search convertedFiles={convertedFiles} authStatus={authStatus} />} />

            {authStatus === 'user' && (
              <>
                <Route path="/update-file" element={<UpdateFile updateFiles={updateFiles} fileManage={fileManage} />} />
                <Route path="/manage-file" element={<ManageFile fileManage={fileManage} />} />
                <Route path="/manage-account" element={<ManageAccount />} />
              </>
            )}
            {authStatus === 'guest' && (
              <>
                <Route path="/update-file" element={<BacktoLogin onBackToLogin={handleLogout} />} />
                <Route path="/manage-file" element={<BacktoLogin onBackToLogin={handleLogout} />} />
                <Route path="/manage-account" element={<BacktoLogin onBackToLogin={handleLogout} />} />
              </>
            )}

            <Route path="*" element={authStatus ? <Navigate to="/home" /> : <Navigate to="/login" />} />
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
