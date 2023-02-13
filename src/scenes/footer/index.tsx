import Logo from "@/assets/logo.png";
import Maps from "@/shared/Maps";
import { Mailer } from "../mailer/mailer";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16 px-5">
      <div className="justify-content w-6/6 mx-auto gap-16 md:grid md:grid-cols-3">
        <div className="mt-16 flex basis-1/2 flex-col items-center justify-center md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="mt-10 text-center">
            © Kirchenhaus todos los derechos reservados.
          </p>
        </div>

        <div className="mt-16 basis-1/2 text-center md:mt-0 flex flex-col justify-center ">
          <h4 className="py-2 text-xl font-bold">Contacto</h4>
          <hr className="border border-gray-500 " />
          <p className="py-5">
            Hora de Atencion: <br /> de Lunes a Sabado 8am a 7pm
          </p>
          <hr className="border border-gray-500 " />
          <p className="py-5">informes@kirchenhaus.pe</p>
          <hr className="border border-gray-500 " />
          <p className="py-5">+51 996 699 728</p>
          <hr className="border border-gray-500 " />
          <p className="py-5">
            <a
              href="https://www.facebook.com/kirchenhaus.pe/"
              className="py-5 font-semibold text-blue-600"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div>
          <Mailer />
        </div>
      </div>
      <div className="flex w-full items-center justify-center pt-10">
        <Maps />
      </div>
    </footer>
  );
};

export default Footer;
