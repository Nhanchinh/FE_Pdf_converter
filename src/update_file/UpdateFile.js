import React, { useState } from 'react';
import './updateFile.scss'
function UpdateFile({ updateFiles, fileManage }) {


    const handleUpdate = () => {
        const newFiles = [
            { title: 'Home', infomation: 'this is home', fileType: '' },
            { title: 'Tìm kiếm', infomation: 'tìm kiếm mọi lúc', fileType: '' },
            { title: 'Cập nhật file', infomation: 'trang cá nhân', fileType: '' },
            { title: 'Quản lý file', infomation: 'dữ liệu của bạn', fileType: '' },
            { title: 'Quản lý tài khoản', infomation: 'quản lý tài khoản', fileType: '' },
        ];
        updateFiles(newFiles); // Cập nhật danh sách file bằng cách truyền newFiles
    };







    return (
        <div className="update-wrapper" >
            <div className="update-content">
                <div className="update-content_tilte">Bạn chưa cập nhật file, ấn Update phía dưới để làm mới</div>
                <div className="update-content_button">
                    <button className='button1' onClick={handleUpdate}>Update</button>
                </div>



            </div>
        </div>
    );
}

export default UpdateFile



