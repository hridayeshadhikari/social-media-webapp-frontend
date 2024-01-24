import React, { useState } from 'react'
import { sideMenuBarItems } from './SidebarNavigation'
import { Avatar, Card, Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../CreatePost/CreatePostModal';

const Sidebar = () => {

    const [openCreatePostModal,setOpenCreatePostModal]=React.useState(false);

    const handleCloseCreatePostModal=()=>setOpenCreatePostModal(false);

    const handleOpenCreatePostModal=()=>{
        setOpenCreatePostModal(true);
        console.log("open post model....",openCreatePostModal);
    };


    const navigate=useNavigate();
    const handleNavigate=(item)=>{
        if(item.title==="Profile"){
            navigate(`/profile/${auth.user?.id}`)
        }else if(item.title==="Create Post"){
            handleOpenCreatePostModal()
            
        }
        else{
            navigate(item.path)
        }
    }
    
    const { auth } = useSelector(store => store);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Card className='card h-screen flex flex-col justify-between py-5'>
            <div className='space-y-8 pl-5'>
                <div>
                    <span className='logo font-bold text-xl'>SocialVista</span>
                </div>
                <div className='space-y-8'>
                    {sideMenuBarItems.map((item) =>
                    

                        <div onClick={() => handleNavigate(item)} className='flex space-x-3 cursor-pointer items-center '>
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>)}
                </div>
            </div>

            <div>
                <Divider />
                <div className='pl-5 flex items-center justify-between pt-5'>
                    <div className='flex items-center space-x-3 '>
                        <Avatar src='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg' />

                        <div >
                            <p className='font-bold'>{auth.user?.firstName + " " + auth.user?.lastName}</p>
                            <p className='opacity-70'>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
                        </div>
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
            <div>
                <CreatePostModal handleClose={handleCloseCreatePostModal} open={openCreatePostModal}/>
            </div>
        </Card>



    );
};

export default Sidebar;
