import CloseButton from "./CloseButton";

type Props = {
  showModal: Boolean;
  dataModal: string;
  setShowModal: (show: boolean) => void;
};

const Modal = ({ showModal, dataModal, setShowModal }: Props) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-25 text-black backdrop-blur-sm">
          <div className="m-5 flex flex-col md:m-0 md:max-w-[600px]">
            <button
              className="place-self-end text-xl text-white"
              onClick={() => setShowModal(false)}
            >
              <CloseButton />
            </button>
            <div className=" rounded bg-white p-5 overflow-y-scroll md:overflow-y-hidden max-h-[80vh] ">
              <div>{dataModal}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
