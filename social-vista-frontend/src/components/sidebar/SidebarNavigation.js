import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';

export const sideMenuBarItems=[
  {
    title:"Home",
    icon:<HomeIcon/>,
    path:"/"
  },
  {
    title:"Reels",
    icon:<ExploreIcon/>,
    path:"/reels"
  },
  {
    title:"Create Reels",
    icon:<ControlPointIcon/>,
    path:"/create-reels"
  },
  {
    title:"Message",
    icon:<MessageIcon/>,
    path:"/message"
  },
  {
    title:"Lists",
    icon:<ListAltIcon/>,
    path:"/list"
  },
  {
    title:"Profile",
    icon:<AccountCircleIcon/>,
    path:"/profile"
  },
]
