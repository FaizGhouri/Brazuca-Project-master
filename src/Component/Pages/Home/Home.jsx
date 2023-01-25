import React from 'react';
import Header from '../../Subcomponent/Header/Header';
import Sidebar from '../../Subcomponent/Sidebar/Sidebar';
import Slider from 'react-slick';
import '../Home/Home.css';
import banner1 from '../../../Assets/Images/banner/jackpot@370.webp'
import banner2 from '../../../Assets/Images/banner/wager@370.webp'
import banner3 from '../../../Assets/Images/banner/january@370.webp'
import banner4 from '../../../Assets/Images/banner/fun@370.webp'
import BasicTabs from '../../Subcomponent/Tab/Tab';
import Lic from '../../../Assets/Images/Logo/ball.png';
import tech from '../../../Assets/Images/Logo/download.png';
import {SiBitcoin} from 'react-icons/si';
import {SiBitcoincash} from 'react-icons/si';
import {SiLitecoin ,SiDogecoin ,SiEthereum,SiBinance ,SiRipple} from 'react-icons/si';
import TronIcon from '../../../Assets/Images/Logo/tron-64.png'
import TetherIcon from '../../../Assets/Images/Logo/tether-64.png'

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

          {/* <div className='Button-div'>
            <button className='Btn-1'><i class="fa-solid fa-dice"></i> Lobby</button>
            <button className='Btn-1'><i class="fa-solid fa-house"></i> In House</button>
            <button className='Btn-1'><i class="fa-solid fa-7"></i> Slots</button>
            <button className='Btn-1'><i class="fa-solid fa-user-tie"></i> Live</button>
            <button className='Btn-1'><i class="fa-solid fa-cards"></i> Table</button>

          </div> */}



          <div className='Games-div'>

            <div className='House-div'>
              <i class="fa-solid fa-gamepad gamespad-2"></i>
              <p class="house">Games</p>

            </div>

            <div className='Game-img-div'>

              <div className='Carsh'>
                <div className='crash-overlay'>
                  <p className='GN-text'>Crash</p>
                  <p className='Club-Name'>Bazuca Club</p>

                  <div className='Play-div'>
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
              <div className='mine'>
                <div className='crash-overlay'>
                  <p className='GN-text'>Crash</p>
                  <p className='Club-Name'>Bazuca Club</p>

                  <div className='Play-div'>
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
              <div className='rule'>
                <div className='crash-overlay'>
                  <p className='GN-text'>Crash</p>
                  <p className='Club-Name'>Bazuca Club</p>

                  <div className='Play-div'>
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
              <div className='poker'>
                <div className='crash-overlay'>
                  <p className='GN-text'>Crash</p>
                  <p className='Club-Name'>Bazuca Club</p>

                  <div className='Play-div'>
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
              <div className='qj'>
                <div className='crash-overlay'>
                  <p className='GN-text'>Crash</p>
                  <p className='Club-Name'>Bazuca Club</p>

                  <div className='Play-div'>
                    <i class="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>


              <BasicTabs />

              <div className='table-list'>

                <table>
                  <thead>
                    <tr className='list-th'>
                      <th>l-GAMING</th>
                      <th>PROMOTIONS</th>
                      <th>LEGAL</th>
                      <th>COMMUNTIY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='home-td'>Home</td>
                      <td className='home-td'>Affilate</td>
                      <td className='home-td'>Term of Service</td>
                      <td className='home-td'>Bitcointalk</td>
                    </tr>
                    <tr>
                      <td className='home-td-1'>All Games</td>
                      <td className='home-td-1'>Jackpot</td>
                      <td className='home-td-1'>Privacy Policy</td>
                      <td className='home-td-1'>Telegram</td>
                    </tr>
                    <tr>
                      <td className='home-td-1'>Provably Fair</td>
                      <td className='home-td-1'>Vip club</td>
                      <td className='home-td-1'>Responsible Gaming</td>
                      <td className='home-td-1'>Twitter</td>
                    </tr>
                    <tr>
                      <td className='home-td-1'></td>
                      <td className='home-td-1'>Contest</td>
                      <td className='home-td-1'>Vulnerability Disclosure</td>
                      <td className='home-td-1'>Contact Us</td>
                    </tr>
                  </tbody>
                </table>

              </div>


              <div>


              </div>

            </div>

          </div>

          <div className="LC-div">
            <div className='License-div'>

              <p>License 8084/JAZ</p>

              <img src={Lic} alt="img" />

            </div>
            <div className='Certificate-div'>
              <p>RNG Certificate</p>

              <img src={tech} alt="img" />
            </div>
          </div>

          <div className='Icon-div'>

            <div className='Eigthen-div'>
              <p>18+</p>

            </div>


            <div className='BL-div'>
              <SiBitcoin color='#acb9d2' size={25} />
            </div>
            <div className='BR-div'>
              <SiBitcoincash color='#acb9d2' size={25} />
            </div>

            <div className='Lite-div'>

              <SiLitecoin color='#acb9d2' size={25} />

            </div>

            <div className='Doge-Div'>
              <SiDogecoin color='#acb9d2' size={25} />
            </div>


            <div className='ethrum-div'>
              <SiEthereum color='#acb9d2' size={25}/>

            </div>

            <div className='ripple-div'>

              <SiRipple color='#acb9d2' size={25}/>

            </div>

            <div className='Tron-div'>
              <img src={TronIcon} alt="img" />
            </div>

            <div className='Tether-div'>
              <img src={TetherIcon} alt="img" />
            </div>

            <div className="binance-div">
              <SiBinance  color='#acb9d2' size={25}/>
            </div>

          </div>

          <div className='RC-div'>
            <p className='reg-text'>Bazucafruit B.V. - registration number: 157706 - registered address: Scharlooweg 39, Willemstad, Curaçao</p>
            <p className='copy-text'>© 2023 jacksclub.io All Rights Reserved. v268</p>
          </div>

          <div className='BDT-Div'>
             <p className='Btc-text'>1 BTC = </p>
             <p className='dollar-text'>$ 22992.61</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Home;