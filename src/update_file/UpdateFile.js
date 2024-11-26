// import React, { useState } from 'react';
// import './updateFile.scss'
// function UpdateFile({ updateFiles, fileManage }) {


//     const handleUpdate = () => {
//         const newFiles = [



//             {
//                 title: 'nghị định về bổ sung cần kiểm tra', infomation: 'this is information', orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)'
//                 , numberOrSign: '1155/QĐ-HVM', preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)fffffffffffffffffffffffff', fileType: 'pdf',
//                 dateIssued: '2/3/2024', author: 'Nguyễn Thị Thùy', isSecure: 'none', immediately: 'none(độ khẩn)',
//                 urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf', destination: '(nơi nhận nội bộ)'
//             },
//             {
//                 title: 'nghị định về bổ sung cần kiểm tra', infomation: 'this is information', orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)'
//                 , numberOrSign: '1155/QĐ-HVM', preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)', fileType: 'pdf',
//                 dateIssued: '2/3/2024', author: 'Nguyễn Thị Thùy', isSecure: 'none', immediately: 'none(độ khẩn)',
//                 urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf', destination: '(nơi nhận nội bộ)'
//             },
//             {
//                 title: 'nghị định về bổ sung cần kiểm tra', infomation: 'this is information', orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)'
//                 , numberOrSign: '1155/QĐ-HVM', preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)', fileType: 'pdf',
//                 dateIssued: '2/3/2024', author: 'Nguyễn Thị Thùy', isSecure: 'none', immediately: 'none(độ khẩn)',
//                 urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf', destination: '(nơi nhận nội bộ)'
//             },
//             {
//                 title: 'nghị định về bổ sung cần kiểm tra', infomation: 'this is information', orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)'
//                 , numberOrSign: '1155/QĐ-HVM', preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)', fileType: 'pdf',
//                 dateIssued: '2/3/2024', author: 'Nguyễn Thị Thùy', isSecure: 'none', immediately: 'none(độ khẩn)',
//                 urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf', destination: '(nơi nhận nội bộ)'
//             },
//             {
//                 title: 'nghị định về bổ sung cần kiểm tra', infomation: 'this is information', orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)'
//                 , numberOrSign: '1155/QĐ-HVM', preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)', fileType: 'pdf',
//                 dateIssued: '2/3/2024', author: 'Nguyễn Thị Thùy', isSecure: 'none', immediately: 'none(độ khẩn)',
//                 urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf', destination: '(nơi nhận nội bộ)'
//             },


//         ];
//         updateFiles(newFiles); // Cập nhật danh sách file bằng cách truyền newFiles
//     };

//     return (
//         <div className="update-wrapper" >
//             <div className="update-content">
//                 <div className="update-content_tilte">Bạn chưa cập nhật file, ấn Update phía dưới để làm mới</div>
//                 <div className="update-content_button">
//                     <button className='button1' onClick={handleUpdate}>Update</button>
//                 </div>



//             </div>
//         </div>
//     );
// }

// export default UpdateFile
import React, { useState } from 'react';
import './updateFile.scss';
import DatePicker from 'react-datepicker';
function UpdateFile({ updateFiles }) {
    const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
    const [selectedDate, setSelectedDate] = useState(new Date()); // Ngày được chọn
    const handleUpdate = () => {
        setIsLoading(true); // Bắt đầu loading

        // Giả lập quá trình xử lý dữ liệu (có thể thay bằng API call nếu cần)
        setTimeout(() => {
            const newFiles = [
                {
                    title: 'nghị định về bổ sung cần kiểm tra',
                    infomation: 'this is information',
                    orgCreateName: 'Phòng Chính trị - Tổ chức(đơn vị soạn)',
                    numberOrSign: '1155/QĐ-HVM',
                    preview: 'QĐ vv khen thưởng tổng kết công tác năm 2024(trích yếu)',
                    fileType: 'pdf',
                    dateIssued: '2/3/2024',
                    author: 'Nguyễn Thị Thùy',
                    isSecure: 'none',
                    immediately: 'none(độ khẩn)',
                    urlFile: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
                    destination: '(nơi nhận nội bộ)',
                },
            ];

            updateFiles(newFiles); // Cập nhật danh sách file
            setIsLoading(false); // Tắt loading
        }, 2000); // Giả lập thời gian xử lý là 2 giây
    };

    return (

        // Giao diện chính khi không loading
        // <div className="update-content">
        //     <div className="update-content_title">
        //         Bạn chưa cập nhật file, ấn Update phía dưới để làm mới
        //     </div>
        //     <div className="update-content_button">
        //         <button className="button1" onClick={handleUpdate}>
        //             Update
        //         </button>
        //     </div>
        // </div>


        <div className="update-wrapper">
            {isLoading ? (
                // Màn hình loading
                <div className="loading-screen">
                    <div className="spinner"></div>
                    <p className='text-2xl'> Đang cập nhật file, vui lòng chờ</p>
                </div>
            ) : (
                // Giao diện chính khi không loading
                <div className="update-content">
                    <div className="update-content_title">
                        <p>Chọn ngày để cập nhật file:</p>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            className="date-picker"
                        />
                    </div>
                    <div className="update-content_button">
                        <button className="button1" onClick={handleUpdate}>
                            Update
                        </button>
                    </div>
                </div>
            )}
        </div>




    );
}

export default UpdateFile;
