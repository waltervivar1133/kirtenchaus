import emailjs from "@emailjs/browser";
import { Message } from "../message/message";
import { useState } from "react";

export const Mailer = () => {
  const [showMessage, setShowMessage] = useState<Boolean>(false);
  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_a1bja6k",
        "template_4xlt3oe",
        event.target,
        "kdu0CXInle2gychjU"
      )
      .then(() => setShowMessage(true))
      .catch((error) => console.log(error));

    event.target.reset();

    setShowMessage(false);
  };

  return (
    <div className="">
      <h1 className="text-center text-xl font-semibold">Contáctanos</h1>
      {showMessage && <Message />}

      <form className="form-mail" onSubmit={sendEmail}>
        <div className="my-2 flex flex-col">
          <label>Nombre</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Nombre completo"
            name="user_name"
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label>Email</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Correo electronico"
            name="user_name"
            required
          />
        </div>

        <div className="my-2 flex flex-col">
          <label>Asunto</label>
          <input
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Correo electronico"
            name="user_suject"
            required
          />
        </div>
        <div className="my-2 flex flex-col">
          <label>Mensaje</label>
          <textarea
            name="user_message"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button className="my-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto">
          Enviar
        </button>
      </form>
    </div>
  );
};
