import { SelectedPage, ServiceType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Service from "./Service";
import { services } from "@/constants/services";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="servicios" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Service)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Nuestros servicios</HText>
          </div>
        </motion.div>
        <div className="mt-10 h-full w-full md:h-[300px] ">
          <ul className="grid w-full grid-cols-1 text-center md:grid-cols-3">
            {services.map((item: ServiceType, index) => (
              <Service
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
