import React, { useState, useEffect } from 'react';
import './search.scss';
import searchIcon from '../assets/Vector.png';
import fileIcon from '../assets/device-fill.png';
import downloadIcon from '../assets/download-white.png';
import deleteIcon from '../assets/delete-bin-5-white.png';

function Search({ convertedFiles }) {
    const [file, setFile] = useState([
        { title: 'Home', infomation: 'this is home', fileType: '' },
        { title: 'Tìm kiếm', infomation: 'tìm kiếm mọi lúc', fileType: '' },
        { title: 'Cập nhật file', infomation: 'trang cá nhân', fileType: '' },
        { title: 'Quản lý file', infomation: 'dữ liệu của bạn', fileType: '' },
        { title: 'Quản lý tài khoản', infomation: 'quản lý tài khoản', fileType: '' },
    ]); // lưu trữ danh sách file từ server
    const [searchTerm, setSearchTerm] = useState(''); // lưu từ khóa tìm kiếm

    // Sử dụng useEffect để cập nhật file khi convertedFiles thay đổi
    useEffect(() => {
        setFile(convertedFiles);
    }, [convertedFiles]);

    // Hàm tải xuống file
    const handleDownload = (fileName) => {
        console.log(`Tải xuống file: ${fileName}`);
    };

    // Hàm xóa file
    const handleDelete = (fileName) => {
        setFile((prevFiles) => prevFiles.filter(file => file.title !== fileName));
        console.log(`Đã xóa file: ${fileName}`);
    };

    // Lọc file theo từ khóa
    const filteredFiles = file.filter((val) =>
        (val.title && val.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (val.infomation && val.infomation.toLowerCase().includes(searchTerm.toLowerCase())) // Sửa 'information' thành 'infomation'
    );

    return (
        <div>
            <div className='search-wrapper'>
                <div className='search-typing'>
                    <div className='search-icon'>
                        <img src={searchIcon} alt='search icon' />
                    </div>
                    <div className='search-typing-location'>
                        <input
                            type='text'
                            placeholder='Nhập nội dung bạn muốn tìm...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật searchTerm khi gõ
                        />
                    </div>
                </div>
            </div>
            <div className='search-file'>
                {filteredFiles.map((val, key) => (
                    <div key={key} className='search-file_wrapper'>
                        <div className='file-wrapper'>
                            <div className='file-icon'>
                                <img src={fileIcon} alt='img file' />
                            </div>
                            <div className='file-title'>{val.title}</div>
                            <div className='file-action'>
                                <div className='download-action' onClick={() => handleDownload(val.title)}>
                                    <img src={downloadIcon} alt='download' />
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;



// import React from 'react'
// import './search.scss'
// import searchIcon from '../assets/Vector.png'
// import fileIcon from '../assets/device-fill.png'
// function Search() {

//     const file = [
//         {
//             title: 'Home',

//         },
//         {
//             title: 'Tìm kiếm',

//         },
//         {
//             title: 'Cập nhật file',

//         },
//         {
//             title: 'Quản lý file',

//         },
//         {
//             title: 'Quản lý tài khoảnnnnnnnnnn',

//         },
//     ]



//     return (

//         <div>
//             <div className='search-wrapper'>
//                 <div className='search-typing'>
//                     <div className='search-icon'> <img src={searchIcon}></img> </div>
//                     <div className='search-typing-location'>
//                         <input type='text' placeholder='Nhập nội dung bạn muốn tìm...'></input>
//                     </div>
//                 </div>



//             </div>
//             <div className='search-file'>



//                 {file.map((val, key) => {
//                     return (
//                         < div className='search-file_wrapper' >
//                             <div className='file-wrapper'>
//                                 <div className='file-icon'> <img src={fileIcon} alt='img file'></img> </div>
//                                 <div className='file-title'> {val.title}</div>
//                             </div>
//                         </div>
//                     );



//                 })}

//                 {/*
//                 <div className='search-file_wrapper'>
//                     <div className='file-wrapper'>
//                         <div className='file-icon'> <img src={fileIcon} alt='img file'></img> </div>
//                         <div className='file-title'>File name</div>
//                     </div>
//                 </div> */}
//             </div>
//         </div >
//     )
// }

// export default Search