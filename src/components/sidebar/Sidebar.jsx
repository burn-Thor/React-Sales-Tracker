import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top"><span className="logo">BurnAdmin</span></div>
        <hr />
        <div className="center">
            <ul>

                    <p className="title">MAIN</p>

                <li>
                    <DashboardIcon className ='icon'/><span>Dashboard</span></li>

                    <p className="title">LISTS</p>


                <li>
                    <GroupOutlinedIcon className ='icon'/> <span>Users</span></li>
                <li>
                    <CategoryOutlinedIcon className ='icon' /> <span>Products</span></li>
                <li>
                    <ShoppingCartOutlinedIcon className ='icon' /> <span>Orders</span></li>
                <li>
                    <LocalShippingOutlinedIcon className ='icon' /> <span>Delivery</span></li>

                    <p className="title">USEFUL</p>

                <li>
                    <QueryStatsOutlinedIcon className ='icon' /> <span>Stats</span></li>
                <li> <NotificationsOutlinedIcon className ='icon' /> <span>Notifications</span></li>

                <p className="title">SERVICE</p>

                <li> <LocalHospitalOutlinedIcon className ='icon' /> <span>System Health</span></li>
                <li> <EngineeringOutlinedIcon className ='icon' /> <span>Logs</span></li>
                <li> <SettingsOutlinedIcon className ='icon' /> <span>Settings</span></li>

                <p className="title">USER</p>

                <li> <PersonOutlineIcon className ='icon' /> <span>Profile</span></li>
                <li> <LogoutIcon className ='icon' /> <span>Log Out</span></li>
              
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
  )
}

export default Sidebar