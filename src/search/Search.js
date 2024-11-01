import React from 'react'
import './search.scss'
import searchIcon from '../assets/Vector.png'
import fileIcon from '../assets/device-fill.png'
function Search() {

    const file = [
        {
            title: 'Home',

        },
        {
            title: 'Tìm kiếm',

        },
        {
            title: 'Cập nhật file',

        },
        {
            title: 'Quản lý file',

        },
        {
            title: 'Quản lý tài khoảnnnnnnnnnn',

        },
    ]



    return (

        <div>
            <div className='search-wrapper'>
                <div className='search-typing'>
                    <div className='search-icon'> <img src={searchIcon}></img> </div>
                    <div className='search-typing-location'>
                        <input type='text' placeholder='Nhập nội dung bạn muốn tìm...'></input>
                    </div>
                </div>



            </div>
            <div className='search-file'>



                {file.map((val, key) => {
                    return (
                        < div className='search-file_wrapper' >
                            <div className='file-wrapper'>
                                <div className='file-icon'> <img src={fileIcon} alt='img file'></img> </div>
                                <div className='file-title'> {val.title}</div>
                            </div>
                        </div>
                    );



                })}

                {/* 
                <div className='search-file_wrapper'>
                    <div className='file-wrapper'>
                        <div className='file-icon'> <img src={fileIcon} alt='img file'></img> </div>
                        <div className='file-title'>File name</div>
                    </div>
                </div> */}
            </div>
        </div >
    )
}

export default Search