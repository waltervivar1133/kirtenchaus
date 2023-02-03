import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { AboutMomentsType, AboutTexts, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AboutImage from "@/assets/bg-nosotros.png";
import Benefit from "./Benefit";
import {
  aboutMoments,
  aboutTextFooter,
  aboutTextParagraph,
} from "@/constants/about";
import { aboutText } from "@/constants/about";
import Modal from "@/shared/Modal";
import { useState } from "react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const [dataModal, setDataModal] = useState('');
  return (
    <section id="nosotros" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Sucesos importantes</HText>
        </motion.div>

        {/* SUCESOS IMPORTANTES */}
        <motion.div
          className="mt-5 place-content-center items-center justify-between gap-8 md:grid md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {aboutMoments.map((benefit: AboutMomentsType) => (
            <>
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                shortDescription={benefit.shortDescription}
                description={benefit.description}
                setShowModal={setShowModal}
                setDataModal={setDataModal}
              />
            </>
          ))}
          <Modal showModal={showModal} dataModal={dataModal}  setShowModal={setShowModal}/>
        </motion.div>

        {/* NOSOTROS */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={AboutImage}
          />

          {/* NOSOTROS */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>Acerca de Nosotros</HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className="my-5 text-xl font-bold">
                Etólogo especialista en conducta animal y adiestramiento canino
              </h3>

              <ul>
                {aboutText.map((text: AboutTexts, i) => (
                  <li key={i} className="list-disc">{text.description}</li>
                ))}
              </ul>

              <p className="my-5">{aboutTextParagraph}</p>
              <div>
                <h5> MIEMBRO DE:</h5>
                <ul>
                  {aboutTextFooter.map((text: AboutTexts, i) => (
                    <li  key={i} className="list-disc">{text.description}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
