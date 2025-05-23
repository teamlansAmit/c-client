// import React, { useContext } from 'react';
// import { Grid, Paper, Typography } from '@mui/material';
// import { SocketContext } from '../../SocketContext';
// import './VideoPlayer.css';

// const VideoPlayer = () => {
//     const { call, callAccepted, callEnded, stream, myVideo, userVideo, Name } = useContext(SocketContext);
//     return (
//         <Grid container className='gridContainer'>
//             {/* OWN Video */}

//             {
//                 stream && (
//                     <Paper className='paper'>
//                         <Grid item xs={12} md={6}>
//                             <Typography variant='h5' gutterBottom> {Name || 'Name'} </Typography>
//                             <video playsInline muted ref={myVideo} autoPlay className='video' />
//                         </Grid>
//                     </Paper>
//                 )
//             }

//             {/* Users Video */}

//             {
//                 callAccepted && !callEnded && (
//                     <Paper className='paper'>
//                         <Grid item xs={12} md={6}>
//                             <Typography variant='h5' gutterBottom> {call.name || 'Name'} </Typography>
//                             <video playsInline ref={userVideo} autoPlay className='video' />
//                         </Grid>
//                     </Paper>
//                 )
//             }

//         </Grid>
//     )
// }

// export default VideoPlayer;





import React, { useContext } from 'react';
import { SocketContext } from '../../SocketContext';


const VideoPlayer = () => {
  const { call, callAccepted, callEnded, stream, myVideo, userVideo, Name } = useContext(SocketContext);

  return (
    <div className="video-container">
      {/* Own Video */}
      {stream && (
        <div className="video-box">
          <div className="video-info">{Name || 'Name'}</div>
          <video playsInline muted ref={myVideo} autoPlay className="video" />
        </div>
      )}

      {/* User's Video */}
      {callAccepted && !callEnded && (
        <div className="video-box">
          <div className="video-info">{call.name || 'Name'}</div>
          <video playsInline ref={userVideo} autoPlay className="video" />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
