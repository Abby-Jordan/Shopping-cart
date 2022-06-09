import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import urlFile from '../../url';

const Home = () => {
  //   console.log('urlFile', urlFile);

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
