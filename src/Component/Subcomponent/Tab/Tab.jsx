import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../Tab/Tab.css';
import banner1 from '../../../Assets/Images/banner/jackpot@370.webp'
import banner2 from '../../../Assets/Images/banner/wager@370.webp'
import banner3 from '../../../Assets/Images/banner/january@370.webp'

const settings1 = {
    lidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
}

const setting2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className='box-Container'>
            <Box sx={{ width: '100%' }} >
                <Box >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Contests" {...a11yProps(0)} />
                        <Tab label="All Bets" {...a11yProps(1)} />
                        <Tab label="High Roller" {...a11yProps(2)} />
                        <Tab label="Rare Wins" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className='WHP-div'>

                        <div className='Banner-1-Div'>
                            <img src={banner1} alt="" />
                            <div className='blue-div-1'></div>
                        </div>

                        <div className='Banner-2-Div'>
                            <img src={banner2} alt="" />
                            <div className='blue-div-2'></div>
                        </div>
                        <div className='Banner-3-Div'>
                            <img src={banner3} alt="" />
                            <div className='blue-div-3'></div>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="table-div">
                        <table cellpadding="15" cellSpacing={0}>
                            <thead>
                                <tr className="head-tr">
                                    <td class="Game-table">Games</td>
                                    <td className='Game-User'>User</td>
                                    <td className='Game-Time'>Time</td>
                                    <td className='Game-Bet'>Bet</td>
                                    <td className='Game-Multiplier'>Multiplier</td>
                                    <td className='GameProfit'>Profit</td>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="Tr-1">
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr className='Tr-2'>
                                    <th className="Keno-th-1">Keno</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'> 0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Mines</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Blaze</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="table-div">
                        <table cellpadding="15" cellSpacing={0}>
                            <thead>
                                <tr className="head-tr">
                                    <td class="Game-table">Games</td>
                                    <td className='Game-User'>User</td>
                                    <td className='Game-Time'>Time</td>
                                    <td className='Game-Bet'>Bet</td>
                                    <td className='Game-Multiplier'>Multiplier</td>
                                    <td className='GameProfit'>Profit</td>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="Tr-1">
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr className='Tr-2'>
                                    <th className="Keno-th-1">Keno</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'> 0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Mines</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Blaze</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="table-div">
                        <table cellpadding="15" cellSpacing={0}>
                            <thead>
                                <tr className="head-tr">
                                    <td class="Game-table">Games</td>
                                    <td className='Game-User'>User</td>
                                    <td className='Game-Time'>Time</td>
                                    <td className='Game-Bet'>Bet</td>
                                    <td className='Game-Multiplier'>Multiplier</td>
                                    <td className='GameProfit'>Profit</td>
                                </tr>

                            </thead>
                            <tbody>
                                <tr className="Tr-1">
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr className='Tr-2'>
                                    <th className="Keno-th-1">Keno</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'> 0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Mines</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Blaze</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th-1">Dice</th>
                                    <td className='hiddle-td-1'>Hidden</td>
                                    <td className='user-td-1'>22.55.23</td>
                                    <td className='bet-td-1'>0.25000000</td>
                                    <td className="Multiplier-1">0x</td>
                                    <td className="Profit-1">-0.00052537</td>
                                </tr>
                                <tr>
                                    <th className="Keno-th">Keno</th>
                                    <td className='hiddle-td'>Hidden</td>
                                    <td className='user-td'>22.55.23</td>
                                    <td className='bet-td'>0.25000000</td>
                                    <td className="Multiplier">0x</td>
                                    <td className="Profit">-0.00052537</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPanel>

            </Box>

        </div>
    );
}
