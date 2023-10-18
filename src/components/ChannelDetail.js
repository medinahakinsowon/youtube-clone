import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/fetchFromApi';
 

const ChannelDetail = () => {
  
  const [ channelDetail, setChannelDetail ] = useState()
  const [ videos, setVideos ] = useState(null)
  
  const { id } = useParams()
  console.log(id)

  console.log(channelDetail)
  console.log(videos)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);
      console.log(data)

      // setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(`search?channelId=${id}&part=snippet&order=date`);
      console.log(videosData)

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,21,1) 58%)',
      zIndex: 10,
      height: '300px'}}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail;
