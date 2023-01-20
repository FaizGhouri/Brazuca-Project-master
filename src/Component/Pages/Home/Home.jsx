import React from 'react';
import Header from '../../Subcomponent/Header/Header';
import Sidebar from '../../Subcomponent/Sidebar/Sidebar';
import Slider from 'react-slick';
import '../Home/Home.css';
import banner1 from '../../../Assets/Images/banner/jackpot@370.webp'
import banner2 from '../../../Assets/Images/banner/wager@370.webp'
import banner3 from '../../../Assets/Images/banner/january@370.webp'
import banner4 from '../../../Assets/Images/banner/fun@370.webp'

const Home = () => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,  
  }

  return (
    <div className='Main-Container'>

      <div>

        <Header />

      </div>

      <div className="SM-div">


        <div>


          <Sidebar />

        </div>

        <div class="Middle-content">
        

          <div className='Slider-div'>
            <Slider {...settings}>
              <div className='Banner-1'>
                 <img src={banner1} alt="" />
                {/* <h3>1</h3> */}
              </div>
              <div className='Banner-2'>
              <img src={banner2} alt="" />
              </div>
              <div className='Banner-3'>
              <img src={banner3} alt="" />
              </div>
              <div className='Banner-4'>
              <img src={banner4} alt="" />
              </div>
            </Slider>
          </div>

          <div className='Button-div'>
            <button className='Btn-1'><i class="fa-solid fa-dice"></i> Lobby</button>
            <button className='Btn-1'><i class="fa-solid fa-house"></i> In House</button>
            <button className='Btn-1'><i class="fa-solid fa-7"></i> Slots</button>
            <button className='Btn-1'><i class="fa-solid fa-user-tie"></i> Live</button>
            <button className='Btn-1'><i class="fa-solid fa-cards"></i> Table</button>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Home;