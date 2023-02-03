import { motion } from "framer-motion";

// const childVariant = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1 },
// };

type Props = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
  setShowModal: (show: boolean) => void;
  setDataModal: (data: any) => void;
  shortDescription: string;
};

const About = ({
  icon,
  title,
  description,
  setShowModal,
  setDataModal,
  shortDescription,
}: Props) => {
  return (
    <>
      <div
        className="mt-5 rounded-md border-2 border-gray-100  text-center"
      >
        <div className="m-0 flex justify-center p-0">{icon}</div>
        <div className="px-5 pb-8 pt-2">
          <h4 className="font-bold">{title}</h4>
          <p className="my-3">{shortDescription}</p>
          <div
            className="cursor-pointer text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => {
              setShowModal(true);
              setDataModal(description);
            }}
          >
            <p>Saber mas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
