import Logo from '@/assets/logo-k.png'

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
        
          <p>© Kirchenhaus todos los derechos reservados.</p>
        </div>
      
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contacto</h4>
          <p className="my-5">Correo electronico.</p>
          <p>Numero de celular</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
