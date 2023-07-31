"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Modal from "@/components/shared/modal";

export default function CertifiedTambayers() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const certifiedTambayers = [
    {
      name: "Sheriff",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609436149383178/sheriff.jpg",
    },
    {
      name: "Ara",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609367006285895/GLADYS.jpg",
    },
    {
      name: "Gnew",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609367262150946/GNEW.jpg",
    },
    {
      name: "Chixy",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609367526387812/JANE.jpg",
    },
    {
      name: "Riri",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609367799009321/JGURBANO.jpg"
    },
    {
      name: "Paulo Plays",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135610426923696191/PAULO.jpg",
    },
    {
      name: "Mushi",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609368608522332/JOEL.jpg",
    },
    {
      name: "Yami",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609368855982090/JOSE.jpg",
    },
    {
      name: "Kanchoy",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609369141199018/KANCHOY.jpg",
    },
    {
      name: "Neku",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609369409630339/NEKU.jpg",
    },
    {
      name: "Phia",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609436409434223/SOPHIA.jpg",
    },
    {
      name: "Pitchy",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609435411185664/PITCHY.jpg",
    },
    {
      name: "Rizza",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609435683819591/RIZZA.jpg",
    },
    {
      name: "Ryan",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609435918708886/RYANM.jpg",
    },
    {
      name: "Jojo",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609437453824141/ZOREX.jpg",
    },
    {
      name: "Vicente",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609436627546133/VICENTE.jpg",
    },
    {
      name: "Kain Mo",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609436929523834/WILMER.jpg",
    },
    {
      name: "Jenella",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609437176991824/ZADGR.jpg",
    },
    {
      name: "Bubbles",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609368356851783/JOANNA_MAE.jpg",
    },
    {
      name: "Jiji",
      image:
        "https://cdn.discordapp.com/attachments/1135609067595894835/1135609368050679838/JIJI.jpg",
    },
  ];

  return (
    <div className="m:px-0 z-10 w-full max-w-4xl pt-24 xl:px-20">
      <h4
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Certified Tambayers</Balancer>
      </h4>
      <div className="flex flex-wrap justify-center">
        {certifiedTambayers.map((tambay) => (
          <a
            key={tambay.name}
            href="#"
            className="m-2"
            onClick={() => {
              setShowModal(true);
              setName(tambay.name);
              setImage(tambay.image);
            }}
          >
            <Image
              src={tambay.image}
              alt={tambay.name}
              height={200}
              width={100}
              quality={100}
            />
          </a>
        ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <a href="#"></a>
            <Image
              src={image}
              alt={name}
              width="400"
              height="400"
              className="mr-2 rounded-sm"
              loading="eager"
              quality={100}
            ></Image>
          </div>
        </div>
      </Modal>
    </div>
  );
}
