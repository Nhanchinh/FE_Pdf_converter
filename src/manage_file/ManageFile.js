// import React, { useState, useEffect } from 'react';
// import './manageFile.scss';
// import searchIcon from '../assets/Vector.png';
// import fileIcon from '../assets/device-fill.png';
// import downloadIcon from '../assets/download-white.png';
// import deleteIcon from '../assets/delete-bin-5-white.png';

// function ManageFile({ fileManage: initFile }) {
//     const [fileManage, setFileManage] = useState(initFile);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [filesPerPage, setFilesPerPage] = useState(15); // Default files per page
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//     const [isGridView, setGridView] = useState(false)
//     // Update filesPerPage based on screen width
//     useEffect(() => {
//         const updateFilesPerPage = () => {
//             setScreenWidth(window.innerWidth);
//             if (window.innerWidth <= 640) {
//                 setFilesPerPage(3); // Mobile view
//             } else if (window.innerWidth <= 1024) {
//                 setFilesPerPage(6); // Tablet view
//             } else {
//                 setFilesPerPage(15); // Desktop view
//             }
//         };

//         // Add resize event listener
//         window.addEventListener('resize', updateFilesPerPage);

//         // Cleanup listener
//         return () => window.removeEventListener('resize', updateFilesPerPage);
//     }, []);


//     const handleDownload = (fileName) => {
//         console.log(`Tải xuống file: ${fileName}`);
//     };

//     const handleDelete = (fileName) => {
//         setFileManage((prevFiles) => prevFiles.filter(file => file.title !== fileName));
//         console.log(`Đã xóa file: ${fileName}`);
//     };

//     const filteredFiles = fileManage.filter((val) =>
//         (val.title && val.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
//         (val.infomation && val.infomation.toLowerCase().includes(searchTerm.toLowerCase()))
//     );


//     //set the index per page
//     const indexOfLastFile = currentPage * filesPerPage;
//     const indexOfFirstFile = indexOfLastFile - filesPerPage;
//     const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(filteredFiles.length / filesPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     // Display the page numbers around the current page
//     const visiblePageNumbers = () => {
//         const maxPagesToShow = 5; // Maximum pages to show
//         const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
//         const endPage = Math.min(pageNumbers.length, currentPage + Math.floor(maxPagesToShow / 2));

//         return pageNumbers.slice(startPage - 1, endPage);
//     };

//     return (
//         <div className='p-2'>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <div className='search-wrapper1'>
//                     <div className='search-typing1'>
//                         <div className='search-icon'>
//                             <img src={searchIcon} alt='search' />
//                         </div>
//                         <div className='search-typing-location1'>
//                             <input
//                                 type='text'
//                                 placeholder='Nhập tên file muốn tìm...'
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="p-2 border rounded"
//                             />
//                         </div>
//                     </div>

//                 </div>
//                 <div className='ml-1'>
//                     <button
//                         onClick={() => setGridView(false)}
//                         className={`p-2 mr-2 ${!isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
//                     >
//                         Table
//                     </button>
//                     <button
//                         onClick={() => setGridView(true)}
//                         className={`p-2 ${isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
//                     >
//                         Grid
//                     </button>
//                 </div>
//             </div>

//             <div style={{ padding: '4px' }}>


//                 {isGridView ? (

//                     <div className='wrap-container1'>
//                         <div className='container1'>
//                             <div className='search-file1 grid grid-cols-5  gap-4'>
//                                 {currentFiles.map((val, key) => (
//                                     <div className='search-file_wrapper1' key={key}>


//                                         <div className='file-wrapper1 bg-white p-4 rounded-lg shadow-md relative group'>
//                                             <div className='file-icon1'>
//                                                 <img src={fileIcon} alt='img file' className='w-8 h-8' />
//                                             </div>
//                                             <div className='file-title1 text-lg font-semibold'>{val.title}</div>
//                                             <div className='file-action1 flex justify-between mt-2'>
//                                                 <div className='download-action1 cursor-pointer' onClick={() => handleDownload(val.title)}>
//                                                     <img src={downloadIcon} alt='download' className='w-6 h-6' />
//                                                 </div>
//                                                 <div className='delete-action1 cursor-pointer' onClick={() => handleDelete(val.title)}>
//                                                     <img src={deleteIcon} alt='delete' className='w-6 h-6' />
//                                                 </div>
//                                             </div>

//                                             {/* Container thông tin chi tiết */}
//                                             <div className='file-detail absolute top-0 left-0 w-full h-full bg-white p-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-100'>
//                                                 <p><strong>Tên file:</strong> {val.title}</p>
//                                                 <p><strong>Thông tin:</strong> {val.infomation}</p>
//                                                 <p><strong>Loại file:</strong> {val.fileType || 'Không xác định'}</p>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>

//                 )
//                     : (
//                         <div className="table-view max-h-[400px] overflow-y-auto">
//                             <table className="table-auto w-full text-left">
//                                 <thead>
//                                     <tr>
//                                         <th className="p-2">Tên</th>
//                                         <th className="p-2">Loại file</th>
//                                         <th className="p-2">Ngày tạo</th>
//                                         <th className="p-2">Tác giả</th>
//                                         <th className="p-2">Ngày gửi</th>
//                                         <th className="p-2">Thao tác</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {currentFiles.map((val, key) => (
//                                         <tr key={key}>
//                                             <td className="p-2">{val.title}</td>
//                                             <td className="p-2">{val.fileType || 'Không xác định'}</td>
//                                             <td className="p-2">{val.createdAt || 'Không xác định'}</td>
//                                             <td className="p-2">{val.author || 'Không xác định'}</td>
//                                             <td className="p-2">{val.sentAt || 'Không xác định'}</td>
//                                             <td className="p-2">
//                                                 <button onClick={() => handleDownload(val.title)} className="download_btn_row p-2 rounded">
//                                                     <img src={downloadIcon} alt="download" className="w-6 h-6" />
//                                                 </button>
//                                                 <button onClick={() => handleDelete(val.title)} className="delete_btn_row p-2 rounded">
//                                                     <img src={deleteIcon} alt="delete" className="w-6 h-6" />
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )
//                 }
//             </div>






//             {/* Pagination */}
//             <div className='pagination1 flex justify-center mt-4'>
//                 {visiblePageNumbers().map(number => (
//                     <button
//                         key={number}
//                         onClick={() => paginate(number)}
//                         className={`pagination-button1 px-4 py-2 mx-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
//                     >
//                         {number}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ManageFile;










import React, { useState, useEffect } from 'react';
import './manageFile.scss';
import searchIcon from '../assets/Vector.png';
import fileIcon from '../assets/device-fill.png';
import downloadIcon from '../assets/download-white.png';
import deleteIcon from '../assets/delete-bin-5-white.png';
import eyeIcon from '../assets/eye-line.png'

function ManageFile({ fileManage: initFile }) {
    const [fileManage, setFileManage] = useState(initFile);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filesPerPage, setFilesPerPage] = useState(15); // Default files per page
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);



    const [tags, setTags] = useState([]); // Lưu các tag được chọn
    const [suggestions, setSuggestions] = useState([]); // Gợi ý tìm kiếm

    const [isGridView, setGridView] = useState(false) // setup hiển thị grid hay table
    // Update filesPerPage based on screen width
    useEffect(() => {
        const updateFilesPerPage = () => {
            setScreenWidth(window.innerWidth);
            if (window.innerWidth <= 640) {
                setFilesPerPage(3); // Mobile view
            } else if (window.innerWidth <= 1024) {
                setFilesPerPage(6); // Tablet view
            } else {
                setFilesPerPage(15); // Desktop view
            }
        };

        // Add resize event listener
        window.addEventListener('resize', updateFilesPerPage);

        // Cleanup listener
        return () => window.removeEventListener('resize', updateFilesPerPage);
    }, []);


    const handleDownload = (fileName) => {
        console.log(`Tải xuống file: ${fileName}`);
    };

    const handleDelete = (fileName) => {
        setFileManage((prevFiles) => prevFiles.filter(file => file.title !== fileName));
        console.log(`Đã xóa file: ${fileName}`);
    };

    console.log(initFile)
    // Xử lý khi nhập từ khóa
    const handleSearchInput = (value) => {
        setSearchTerm(value);
        // Gợi ý theo các tiêu chí




        const filteredSuggestions = [
            { type: 'Tên file', value },
            { type: 'Đơn vị soạn', value },
            { type: 'Số/kí hiệu', value },
            { type: 'Trích yếu', value },
            { type: 'Người soạn', value },
            { type: 'Ngày ban hành', value },
            { type: 'Nơi nhận nội bộ', value },
            { type: 'Nội dung', value },
        ].filter(suggestion => suggestion.value.trim());

        setSuggestions(filteredSuggestions);
    };

    // Thêm tag khi chọn gợi ý
    const addTag = (tag) => {
        if (!tags.some(t => t.type === tag.type && t.value === tag.value)) {
            setTags([...tags, tag]);
        }
        setSearchTerm(''); // Xóa từ khóa sau khi chọn
        setSuggestions([]); // Ẩn gợi ý
    };

    // Xóa tag
    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };


    // Lọc file dựa trên tags và searchTerm
    const filteredFiles = fileManage.filter(file => {
        // Lọc theo tags
        const matchesTags = tags.every(tag => {
            if (tag.type === 'Tên file') {
                return file.title?.toLowerCase().includes(tag.value.toLowerCase());
            } else if (tag.type === 'Đơn vị soạn') {
                return file.orgCreateName?.includes(tag.value);
            } else if (tag.type === 'Số/kí hiệu') {
                return file.numberOrSign?.includes(tag.value);
            } else if (tag.type === 'Trích yếu') {
                return file.preview?.toLowerCase().includes(tag.value.toLowerCase());
            } else if (tag.type === 'Người soạn') {
                return file.author?.toLowerCase().includes(tag.value.toLowerCase());
            } else if (tag.type === 'Ngày ban hành') {
                return file.dateIssued?.toLowerCase().includes(tag.value.toLowerCase());
            } else if (tag.type === 'Nơi nhận nội bộ') {
                return file.destination?.toLowerCase().includes(tag.value.toLowerCase());
            } else if (tag.type === 'Nội dung') {
                return file.infomation?.toLowerCase().includes(tag.value.toLowerCase());
            }
            return true;
        });

        // Lọc theo searchTerm (nếu có)
        const matchesSearchTerm = searchTerm
            ? file.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            file.infomation?.toLowerCase().includes(searchTerm.toLowerCase())
            : true;

        return matchesTags && matchesSearchTerm;
    });



    console.log(initFile)


    //set the index per page
    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredFiles.length / filesPerPage); i++) {
        pageNumbers.push(i);
    }
    // Display the page numbers around the current page
    const visiblePageNumbers = () => {
        const maxPagesToShow = 5; // Maximum pages to show
        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(pageNumbers.length, currentPage + Math.floor(maxPagesToShow / 2));

        return pageNumbers.slice(startPage - 1, endPage);
    };




    return (
        <div className='p-2'>
            <div className="search-bar w-full">
                <div className="tags flex flex-wrap mb-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag bg-blue-500 text-white px-3 py-1 rounded-full mr-2 mb-2 flex items-center">
                            {`${tag.type}: ${tag.value}`}
                            <button onClick={() => removeTag(tag)} className="ml-2 text-base">×</button>
                        </div>
                    ))}
                </div>
                <div className="search-input relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => handleSearchInput(e.target.value)}
                        placeholder="Nhập từ khóa..."
                        className="p-2 border rounded w-full focus:outline-none"
                    />
                    {suggestions.length > 0 && (
                        <ul className="suggestions absolute bg-white border rounded w-full mt-1 z-10">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => addTag(suggestion)}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {`Search theo ${suggestion.type}: ${suggestion.value}`}
                                </li>
                            ))}
                        </ul>
                    )}





                </div>
                <div className='mt-2 mb-2'>
                    <button onClick={() => setGridView(false)} className={`py-2 px-6 font-semibold mr-2 rounded-md ${!isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                        Table
                    </button>
                    <button onClick={() => setGridView(true)} className={`py-2 px-6 font-semibold rounded-md ${isGridView ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                        Grid
                    </button>
                </div>

            </div>
            <div style={{ padding: '4px' }}>
                {isGridView ? (
                    <div className='wrap-container1'>
                        <div className='container1'>
                            <div className='search-file1 grid grid-cols-5  gap-4'>
                                {currentFiles.map((val, key) => (
                                    <div className='search-file_wrapper1' key={key}>
                                        <div className='file-wrapper1 bg-white p-4 rounded-lg shadow-md relative group'>
                                            <div className='file-icon1'>
                                                <img src={fileIcon} alt='img file' className='w-8 h-8' />
                                            </div>
                                            <div className='file-title1 text-lg font-semibold'>{val.title}</div>
                                            <div className='file-action1 flex justify-between mt-2'>
                                                <div className='download-action1 cursor-pointer' onClick={() => window.open(val.urlFile, '_blank')}>
                                                    <img src={eyeIcon} alt='preview' className='w-6 h-6' />
                                                </div>
                                                <div className='download-action1 cursor-pointer' onClick={() => handleDownload(val.title)}>
                                                    <img src={downloadIcon} alt='download' className='w-6 h-6' />
                                                </div>
                                                <div className='delete-action1 cursor-pointer' onClick={() => handleDelete(val.title)}>
                                                    <img src={deleteIcon} alt='delete' className='w-6 h-6' />
                                                </div>

                                            </div>

                                            {/* Container thông tin chi tiết */}
                                            <div
                                                className={`absolute top-0 left-0 w-full h-full bg-white p-4 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-100 ${(key + 1) % 5 === 0 ? "file-detail" : "file-detail"
                                                    }`}
                                            >


                                                <p><strong>Tên file:</strong> {val.title}</p>
                                                <p><strong>Đơn vị soạn:</strong> {val.orgCreateName || 'Không xác định'}</p>
                                                <p><strong>Số/kí hiệu</strong> {val.numberOrSign}</p>
                                                <p><strong>Trích yếu:</strong> {val.preview}</p>
                                                <p><strong>Người soạn:</strong> {val.author || 'Không xác định'}</p>
                                                <p><strong>Ngày ban hành:</strong> {val.dateIssued || 'Không xác định'}</p>
                                                <p><strong>Nơi nhận nội bộ:</strong> {val.destination || 'Không xác định'}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                )
                    : (
                        <div className="table-view max-h-[400px] overflow-y-auto">
                            <table className="table-auto w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="p-2">Tên</th>
                                        <th className="p-2">Đơn vị soạn</th>
                                        <th className="p-2">Số/kí hiệu</th>
                                        <th className="p-2">Trích yếu</th>
                                        <th className="p-2">Người soạn</th>
                                        <th className="p-2">Ngày ban hành</th>
                                        <th className="p-2">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentFiles.map((val, key) => (
                                        <tr key={key}>
                                            <td className="p-2 max-w-36 truncate">{val.title}</td>
                                            <td className="p-2 max-w-40 truncate">{val.orgCreateName || 'Không xác định'}</td>
                                            <td className="p-2 max-w-12 truncate">{val.numberOrSign || 'Không xác định'}</td>
                                            <td className="p-2 max-w-44 truncate">{val.preview || 'Không xác định'}</td>
                                            <td className="p-2 max-w-xs truncate">{val.author || 'Không xác định'}</td>
                                            <td className="p-2 max-w-xs truncate">{val.dateIssued || 'Không xác định'}</td>
                                            <td className="p-2">



                                                <button onClick={() => window.open(val.urlFile, '_blank')} className="look_btn_row p-2 rounded">
                                                    <img src={eyeIcon} alt="preview" className="w-6 h-6" />
                                                </button>

                                                <button onClick={() => handleDownload(val.title)} className="download_btn_row p-2 rounded">
                                                    <img src={downloadIcon} alt="download" className="w-6 h-6" />
                                                </button>
                                                <button onClick={() => handleDelete(val.title)} className="delete_btn_row p-2 rounded">
                                                    <img src={deleteIcon} alt="delete" className="w-6 h-6" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>




                        </div>
                    )
                }
            </div>
            {/* Pagination */}
            <div className='pagination1 flex justify-center mt-4'>
                {visiblePageNumbers().map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`pagination-button1 px-4 py-2 mx-2 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default ManageFile;








