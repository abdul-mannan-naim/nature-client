import React from 'react';
import { SlOptions } from "react-icons/sl";
import { FiMessageCircle } from "react-icons/fi";
import { MdOutlineReportOff } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi"; 

const Like = ({ l }) => {
    const { img, userImg, username, description, comment, commenter, like, _id } = l;
    const characters = description.split(''); 

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className='flex justify-between p-4 '>
                    <div className='flex justify-center'> <img className='w-[40px] h-[40px] rounded-full mr-3' src={userImg} alt="Shoes" />  <p> {username} </p> </div>
                    <p>  <SlOptions />  </p>
                </div>
                <figure><img className='w-full h-[240px] ' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between p-4 '>
                        <div className='flex justify-center'> <div   className={like ? " text-red-500 mr-3" : " text-sky-500 mr-3"}  > <GiSelfLove /> </div>  <div> <FiMessageCircle />  </div> </div>
                        <div >  <MdOutlineReportOff />  </div>
                    </div>

                    <div > {characters.length > 30 ? characters.slice(0, 30).join('') + "...read more" : description} </div>
                    <div>
                        <div className='flex justify-center items-center'> <img className='w-[40px] h-[40px] rounded-full  ' src={userImg} alt="Shoes" />  <p> Liked by user123 and 73 others  </p> </div>
                    </div>
                    <div className="divider"></div>

                    <div>
                        <div className='flex justify-center items-end'> <img className='w-[40px] h-[40px] rounded-full ' src={commenter} alt="Shoes" />  <p className='badge'>  {comment}  </p> </div>
                    </div>

                    <div className="card-actions justify-end m-4">
                        <button > 30 MINUTES AGO  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Like;