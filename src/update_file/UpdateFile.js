import React from 'react'
import './updateFile.scss'
function UpdateFile() {
    return (
        <div className="update-wrapper" >
            <div className="update-content">
                <div className="update-content_tilte">Bạn chưa cập nhật file, ấn Update phía dưới để làm mới</div>
                <div className="update-content_button">
                    <button className='button1'> Update </button>
                </div>



            </div>
        </div>
    );
}

export default UpdateFile