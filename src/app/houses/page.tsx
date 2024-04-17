import GalleriedetailHouse from '../components/galleriedetailHouse';
import NavdetailsHouse from '../components/navdetailsHouse';

export default  function Page() {

  return (
    <main className=" w-full h-screen  ">
        <NavdetailsHouse/>
        <GalleriedetailHouse/>
    </main>
  );
}