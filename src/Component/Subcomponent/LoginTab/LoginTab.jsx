import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../LoginTab/LoginTab.css';

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

export default function BasicTabs1() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className='Form-div'>

                    <input type="text" placeholder='Username' name="" id="" />
                    <input type="password" placeholder='Password' name="" id="" />
                    <input type="number" placeholder='2FA Code (Optional)' name="" id="" />

                    <button className='SignBtn'>Sign In</button>
                    <button className='ForBTn'>Forget Password</button>

                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className='Form-div'>

                    <input type="text" placeholder='Email' name="" id="" />
                    <input type="text" placeholder='Username' name="" id="" />
                    <input type="password" placeholder='Password' name="" id="" />
                    <div className='hr-div'>
                        <hr /><hr /><hr />
                    </div>
                    <input type="password" placeholder='confirm Password' name="" id="" />

                    <button className='SignBtn'>Create Account</button>
                    
                </div>
            </TabPanel>
        </Box>
    );
}