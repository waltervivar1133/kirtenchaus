import Logo from '@/assets/logo.png'
import Maps from '@/shared/Maps';

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0 flex items-center justify-center flex-col">
          <img alt="logo" src={Logo} />
          <p className='mt-10 text-center'>© Kirchenhaus todos los derechos reservados.</p>
        </div>
      
        <div className="mt-16 basis-1/2 md:mt-0 text-center">
          <h4 className="font-bold">Contacto</h4>
          <p className="my-5">informes@kirchenhaus.pe</p>
          <p className="my-5">+51 996 699 728</p>
          <p><a href="https://www.facebook.com/kirchenhaus.pe/" className='text-blue-600 font-semibold' target="_blank">Facebook</a></p>
        </div>
      </div>
      <div className='flex items-center justify-center w-full pt-10'>
        <Maps/>
      </div>
    </footer>
  );
};

export default Footer;
