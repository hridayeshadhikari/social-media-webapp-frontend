import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ReelCard = ({ item }) => {
  return (
    <div className='mt-7 mb-7 ml-5 mr-5' >
      <Card sx={{ width: 210, height: 380 }} raised={true}>
      <CardActionArea sx={{ position: 'relative' }}>
        <CardMedia
          component='video'
          className={item.video}
          image={item.video}
          sx={{ height: 380 }}
          autoPlay
        />
        <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '8px' }}>
          <Typography variant="subtitle1">@{item.user.firstName.toLowerCase()}_{item.user.lastName.toLowerCase()}</Typography>
          <Typography variant="body2">{item.caption}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

export default ReelCard;
