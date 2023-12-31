import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryParams } from '../../common/hooks';
import { LayoutType } from './type';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Loader } from '../Loader';
import RoomService from '../../services/room';

export const Layout: FC<LayoutType> = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { roomKey } = useQueryParams();

  useEffect(() => {
    const fetchRoomKeyDetails = async () => {
      try {
        setLoading(true);
        const collectRoomData = await RoomService.getRoomById(roomKey as string);
        if ('status' in collectRoomData) {
          if (collectRoomData.status !== 200) {
            //navigate to notfound room
            navigate('/notfound');
          } else {
            //everything good? then process with join room screen
            const { roomDetails = {} } = collectRoomData;
            if (roomDetails?.roomKey) {
              const roomKey = roomDetails.roomKey;
              navigate(`/join/?roomKey=${roomKey}`);
            }
          }
        }
      } catch (e) {
        //
      } finally {
        setLoading(false); // loader set to false irrespective api failure or success
      }
    };
    if (roomKey) {
      fetchRoomKeyDetails();
    }
  }, []);

  return (
    <div>
      {!loading ? (
        <>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <Loader show={loading} />
      )}
    </div>
  );
};
