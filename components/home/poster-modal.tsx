import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const PosterModal = ({
  showPosterModal,
  setShowPosterModal,
}: {
  showPosterModal: boolean;
  setShowPosterModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showPosterModal} setShowModal={setShowPosterModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="#"></a>
          <Image
            src={member.image}
            alt={member.name}
            width="400"
            height="400"
            className="mr-2 rounded-sm"
          ></Image>
        </div>
      </div>
    </Modal>
  );
};

export function usePosterModal() {
  const [showPosterModal, setShowPosterModal] = useState(false);

  const PosterModalCallback = useCallback(() => {
    return (
      <PosterModal
        showPosterModal={showPosterModal}
        setShowPosterModal={setShowPosterModal}
      />
    );
  }, [showPosterModal, setShowPosterModal]);

  return useMemo(
    () => ({ setShowPosterModal, PosterModal: PosterModalCallback }),
    [setShowPosterModal, PosterModalCallback],
  );
}
