import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Header from './header/header';
import Login from './login/login';
import Sidebar from './sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Thay đổi đây
import Search from './search/Search'; // Component cho Tìm kiếm
import UpdateFile from './update_file/UpdateFile'; // Component cho Cập nhật file
import ManageFile from './manage_file/ManageFile'; // Component cho Quản lý file
import ManageAccount from './manage_account/ManageAccount'; // Component cho Quản lý tài khoản

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes> {/* Thay đổi từ Switch thành Routes */}
              <Route path="/home" element={<Home />} /> {/* Thay đổi cách truyền props */}
              <Route path="/search" element={<Search />} />
              <Route path="/update-file" element={<UpdateFile />} />
              <Route path="/manage-file" element={<ManageFile />} />
              <Route path="/manage-account" element={<ManageAccount />} />
              <Route path="/" element={<Home />} /> {/* Mặc định hiển thị Home */}
            </Routes>
          </div>
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
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Search from './search/Search'; // Component cho Tìm kiếm
// import UpdateFile from './update_file/UpdateFile'; // Component cho Cập nhật file
// import ManageFile from './manage_file/ManageFile'; // Component cho Quản lý file
// import ManageAccount from './manage_account/ManageAccount'; // Component cho Quản lý tài khoản
// function App() {
//   return (
//     <div>
//       <Header />


//       <Sidebar />
//     </div>
//   );
// }

// export default App;
