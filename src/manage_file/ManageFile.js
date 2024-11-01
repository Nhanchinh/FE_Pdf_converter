
import React, { useState } from 'react';
import './manageFile.scss';
import searchIcon from '../assets/Vector.png';
import fileIcon from '../assets/device-fill.png';
import downloadIcon from '../assets/download-white.png';
import deleteIcon from '../assets/delete-bin-5-white.png';

function ManageFile() {
    const [fileManage, setFileManage] = useState([
        { title: 'Home' },
        { title: 'Tìm kiếm' },
        { title: 'Cập nhật file' },
        { title: 'Quản lý file' },
        { title: 'Quản lý tài khoản' },
    ]);
    const [searchTerm, setSearchTerm] = useState('');


    // useEffect(() => {
    //     // Hàm giả lập lấy dữ liệu từ server
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('URL_TO_YOUR_SERVER'); // Thay thế bằng URL của server của bạn
    //             const data = await response.json();
    //             setFileManage(data); // Cập nhật dữ liệu vào fileManage
    //         } catch (error) {
    //             console.error('Lỗi khi lấy dữ liệu từ server:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); // Chạy chỉ một lần khi component được mount



    // Hàm tải xuống file
    const handleDownload = (fileName) => {
        // Logic để tải xuống file
        console.log(`Tải xuống file: ${fileName}`);
    };

    // Hàm xóa file
    const handleDelete = (fileName) => {
        setFileManage((prevFiles) => prevFiles.filter(file => file.title !== fileName));
        console.log(`Đã xóa file: ${fileName}`);
    };

    // Hàm tìm kiếm
    const filteredFiles = fileManage.filter(file =>
        file.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className='search-wrapper'>
                <div className='search-typing'>
                    <div className='search-icon'>
                        <img src={searchIcon} alt='search' />
                    </div>
                    <div className='search-typing-location'>
                        <input
                            type='text'
                            placeholder='Nhập nội dung bạn muốn tìm...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='search-file'>
                {filteredFiles.map((val, key) => (
                    <div className='search-file_wrapper' key={key}>
                        <div className='file-wrapper'>
                            <div className='file-icon'>
                                <img src={fileIcon} alt='img file' />
                            </div>
                            <div className='file-title'>{val.title}</div>
                            <div className='file-action'>
                                <div className='download-action' onClick={() => handleDownload(val.title)}>
                                    <img src={downloadIcon} alt='download' />
                                </div>
                                <div className='delete-action' onClick={() => handleDelete(val.title)}>
                                    <img src={deleteIcon} alt='delete' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageFile;
