import React, {useEffect, useState} from 'react';
import {HomeScreenView} from './HomeScreenView.tsx';

export const HomeScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(()=>{

  }, [])

  return <HomeScreenView />;
};
