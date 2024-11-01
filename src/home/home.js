import React, { useState } from 'react';
import './home.scss';
import pdfIcon from '../assets/filePdf-mau.png';
import docxIcon from '../assets/docx-mau.png';
import deleteIcon from '../assets/delete-bin-5-white.png';
import downUpload from '../assets/download-upload.png';
import ticked from '../assets/ticked.png';

function Home({ onFileConvert }) { // Thêm props onFileConvert
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFormat, setSelectedFormat] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setSelectedFormat(null);
    };

    const handleFormatSelect = (format) => {
        setSelectedFormat(format);
    };

    const handleConvert = () => {
        if (selectedFile && selectedFormat) {
            // Logic chuyển đổi file
            const convertedFile = {
                name: `${selectedFile.name.split('.')[0]}.${selectedFormat}`,
                type: selectedFormat,
            };
            // Gọi hàm onFileConvert để truyền file đã chuyển đổi đến component cha
            onFileConvert(convertedFile);
        }
    };

    return (
        <div className="home-wrapper">
            <div className="home-content">
                {!selectedFile ? (
                    <>
                        <div style={{ fontFamily: 'roboto' }} className="home-content_tilte">Chuyển đổi thông minh tệp PDF của bạn</div>
                        <div className="home-content_button">
                            <input
                                type="file"
                                accept=".pdf"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="button1">
                                Chọn tệp / File PDF
                            </label>
                        </div>
                    </>
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="uploaded-content">
                            <div className="uploader-content-left">
                                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <div className="file-Icon-red">
                                        <img src={pdfIcon} alt="pdf" />
                                    </div>
                                    <div className="file-name">{selectedFile.name}</div>
                                </div>
                                <button className="upload-button delete-file" onClick={handleRemoveFile}>
                                    <img src={deleteIcon} alt="delete" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <div style={{ fontSize: '22px', marginBottom: '10px', textAlign: 'center' }}>Chọn phương hướng chuyển đổi</div>
                            <div className="uploader-content-right">
                                <div onClick={() => handleFormatSelect('doc')} className={`file-word `}>
                                    <div className="word-icon">
                                        <img src={docxIcon} alt="docx" />
                                    </div>
                                    <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '22px' }}>File .doc</div>
                                    <div style={{ position: 'absolute', top: '-28px', right: '-12px' }} className={` ${selectedFormat === 'doc' ? 'selected' : 'hiden'}`}>
                                        <img style={{ width: '24px', height: '24px' }} src={ticked} alt='ticked'></img>
                                    </div>
                                </div>

                                <div onClick={() => handleFormatSelect('pdf')} className="file-pdf">
                                    <div className="pdf-icon">
                                        <img src={pdfIcon} alt="pdf" />
                                    </div>
                                    <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '22px' }}>File .pdf</div>
                                    <div style={{ position: 'absolute', top: '-28px', right: '-12px' }} className={` ${selectedFormat === 'pdf' ? 'selected' : 'hiden'}`}>
                                        <img style={{ width: '24px', height: '24px' }} src={ticked} alt='ticked'></img>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center' }}>
                                <button className="button-download" style={{ margin: '0 auto' }} onClick={handleConvert}>Chuyển đổi
                                    <img style={{ marginLeft: '6px' }} src={downUpload} alt="upload" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;












// import React, { useState } from 'react';
// import './home.scss';
// import pdfIcon from '../assets/filePdf-mau.png';
// import docxIcon from '../assets/docx-mau.png';
// import deleteIcon from '../assets/delete-bin-5-white.png';
// import downUpload from '../assets/download-upload.png';
// import ticked from '../assets/ticked.png'
// function Home() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [selectedFormat, setSelectedFormat] = useState(null); // State mới để lưu định dạng đã chọn

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedFile(file);
//     };

//     const handleRemoveFile = () => {
//         setSelectedFile(null);
//         setSelectedFormat(null); // Reset định dạng khi xoá file
//     };

//     const handleFormatSelect = (format) => {
//         setSelectedFormat(format);
//         console.log(format)
//     };

//     return (
//         <div className="home-wrapper">
//             <div className="home-content">
//                 {!selectedFile ? (
//                     <>
//                         <div style={{ fontFamily: 'roboto' }} className="home-content_tilte">Chuyển đổi thông minh tệp PDF của bạn</div>
//                         <div className="home-content_button">
//                             <input
//                                 type="file"
//                                 accept=".pdf"
//                                 onChange={handleFileChange}
//                                 style={{ display: 'none' }}
//                                 id="file-upload"
//                             />
//                             <label htmlFor="file-upload" className="button1">
//                                 Chọn tệp / File PDF
//                             </label>
//                         </div>
//                     </>
//                 ) : (
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <div className="uploaded-content">
//                             <div className="uploader-content-left">
//                                 <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
//                                     <div className="file-Icon-red">
//                                         <img src={pdfIcon} alt="pdf" />
//                                     </div>
//                                     <div className="file-name">{selectedFile.name}</div>
//                                 </div>

//                                 <button className="upload-button delete-file" onClick={handleRemoveFile}>
//                                     <img src={deleteIcon} alt="delete" />
//                                 </button>
//                             </div>
//                         </div>

//                         <div>
//                             <div style={{ fontSize: '22px', marginBottom: '10px', textAlign: 'center' }}>Chọn phương hướng chuyển đổi</div>
//                             <div className="uploader-content-right">
//                                 <div onClick={() => handleFormatSelect('doc')} className={`file-word `}>
//                                     <div className="word-icon">
//                                         <img src={docxIcon} alt="docx" />
//                                     </div>
//                                     <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '22px' }}>File .doc</div>
//                                     <div style={{ position: 'absolute', top: '-28px', right: '-12px' }} className={` ${selectedFormat === 'doc' ? 'selected' : 'hiden'}`}>
//                                         <img style={{ width: '24px', height: '24px' }} src={ticked} alt='ticked'></img>
//                                     </div>
//                                 </div>

//                                 <div onClick={() => handleFormatSelect('pdf')} className="file-pdf">
//                                     <div className="pdf-icon">
//                                         <img src={pdfIcon} alt="pdf" />
//                                     </div>
//                                     <div style={{ fontSize: '20px', textAlign: 'center', marginTop: '22px' }}>File .pdf</div>

//                                     <div style={{ position: 'absolute', top: '-28px', right: '-12px' }} className={` ${selectedFormat === 'pdf' ? 'selected' : 'hiden'}`}>
//                                         <img style={{ width: '24px', height: '24px' }} src={ticked} alt='ticked'></img>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div style={{ width: '100%', height: '80px', display: 'flex', alignItems: 'center' }}>
//                                 <button className="button-download" style={{ margin: '0 auto' }}>Chuyển đổi
//                                     <img style={{ marginLeft: '6px' }} src={downUpload} alt="upload" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Home;


