import HomeIcon from '@mui/icons-material/Home';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessageIcon from '@mui/icons-material/Message';
import QueueIcon from '@mui/icons-material/Queue';
import SlideshowIcon from '@mui/icons-material/Slideshow';

export const sideMenuBarItems=[
  {
    title:"Home",
    icon:<HomeIcon/>,
    path:"/"
  },
  {
    title:"Reels",
    icon:<SlideshowIcon/>,
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
    title:"Create Post",
    icon:<QueueIcon/>,
    path:"/profile"
  },
  {
    title:"Profile",
    icon:<AccountCircleIcon/>,
    path:"/profile"
  },
]
