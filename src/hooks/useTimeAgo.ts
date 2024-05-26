import {useEffect, useState} from 'react';
import moment from 'moment';

const useTimeAgo = (timestamp: number) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const date = moment(timestamp);

    const duration = moment.duration(moment().diff(date));

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    let timeAgoString = '';

    switch (true) {
      case years > 0:
        timeAgoString = `${years} year${years > 1 ? 's' : ''} ago`;
        break;
      case months > 0:
        timeAgoString = `${months} month${months > 1 ? 's' : ''} ago`;
        break;
      case days > 0:
        timeAgoString = `${days} day${days > 1 ? 's' : ''} ago`;
        break;
      case hours > 0:
        timeAgoString = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        break;
      case minutes > 0:
        timeAgoString = `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        break;
      case seconds > 0:
        timeAgoString = `${seconds} second${seconds > 1 ? 's' : ''} ago`;
        break;
      default:
        timeAgoString = 'just now';
    }

    setTimeAgo(timeAgoString);

    return () => {
      setTimeAgo('');
    };
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo;
