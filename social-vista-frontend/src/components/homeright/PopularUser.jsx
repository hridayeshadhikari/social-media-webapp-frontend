import React, { useEffect, useState } from 'react';
import { Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { followUser } from '../../Redux/Auth/auth.action';

const PopularUser = ({ item }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);
    const [isFollowed, setIsFollowed] = useState(false); 

   
    useEffect(() => {
        setIsFollowed(auth?.jwt.following?.includes(item.id));
    }, [auth.jwt.following, item.id]);

    const handleFollow = (userId) => {
        if (isFollowed) {
            dispatch(followUser(userId));
            setIsFollowed(false);
        } else {
            dispatch(followUser(userId));
            setIsFollowed(true);
        }
    };

    return (
        <div>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {item.firstName[0] + item.lastName[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <Button size="small" onClick={() => handleFollow(item.id)}>
                            {isFollowed ? 'Unfollow' : 'Follow'} {/* Toggle between Follow and Unfollow */}
                        </Button>
                    </IconButton>
                }
                title={item.firstName + ' ' + item.lastName}
                subheader={'@' + item.firstName.toLowerCase() + '_' + item.lastName.toLowerCase()}
            />
        </div>
    );
};

export default PopularUser;
