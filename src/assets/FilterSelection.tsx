import React from 'react';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


// for image sider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Navigation} from "swiper/modules";


interface FilterSelectionProps {
    setFilterSelection: any; // Function to set filter selection
  filterSelection: any; // Current filter selection
}


// const FilterSelectData= [
//     {
//         id: 1,
//         categories: "Female Shoes"
//     },
//     {
//         id: 2,
//         categories: "Male Shoes"
//     },
//     {
//         id: 3,
//         categories: "Children Shoes"
//     },
//     {
//         id: 4,
//         categories: "All"
//     },
// ]

const FilterSelection: React.FC<FilterSelectionProps> = ({setFilterSelection, filterSelection}) => {
    return (
        <div>
            
              <div className='FilterSelect---Container'>
            <Swiper
                spaceBetween={10}
                slidesPerView= {2.5}
                // scrollbar={{ draggable: true }}
                navigation={{
                  nextEl: ".filterSelect-next",
                  prevEl: ".filterSelect-prev",
                }}
                pagination
                modules={[Navigation]} 
                className='w-full'>
                   
                    <div className="FirstCart--scrollingFilter ">
                   { filterSelection.map((data:any)=> {
                          return(
                            <>
                      <SwiperSlide> 
                 <div className="Filter--Categories p-2 rounded-3xl text-center shadow-md" key={data.id}>
                    {data.categories}</div>  
                 </SwiperSlide>
                 </>
                )}) }
                 {/* <div className="Filter--Categories p-2 rounded-3xl text-center">Female Shoes</div>  */}
                 </div> 
             
              <div className="filterSelect-prev ">
                  <MdKeyboardDoubleArrowLeft />
                </div>
                <div className="filterSelect-next">
                  <MdKeyboardDoubleArrowRight />
                </div>
             </Swiper>
             </div>
         
        </div>
    );
};

export default FilterSelection;