import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { green } from "@mui/material/colors";


const Widget = ({type}) => {
    let data;

//temp
const amount = 100;
const diff = 20;

        switch(type){
            case "user":
            data={
                title:"Users",
                isMoney: false,
                link:"See all users",                    icon: <PersonOutlinedIcon className="icon"
                style={{backgroundColor: "#f1c5c5dc", color: "#ab141457"}} />,                  
            };
            break;
            case "order":
            data={
                title:"Orders",                        isMoney: false,
                link:"view all orders",
                icon: <ShoppingCartOutlinedIcon className="icon" 
                style={{backgroundColor: "#e7ddb5b3", color: "#6666144c"}}/>,                  
            };
            break;
            case "earning":
            data={
                title:"Earning",
                isMoney: true,
                link:"View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon" 
                style={{backgroundColor: "#b3dab3", color: "#1b601362"}}/>,                  
            };
            break;
            case "balance":
            data={
                title:"Balance",
                isMoney: true,
                link:"See details",
                icon: <AccountBalanceWalletOutlinedIcon className="icon" 
                style={{backgroundColor: "#d5c7def6", color: "#4a0e722f"}}/>,                  
            };
            break;
            default:
            break;
        }


  return (
    <div className ="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "£"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget