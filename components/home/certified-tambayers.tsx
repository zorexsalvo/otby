"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Modal from "@/components/shared/modal";

export default function CertifiedTambayers() {
  const [member, setMember] = useState({
    name: "",
    image: "",
  });
  const [showModal, setShowModal] = useState(false);

  const certifiedTambayers = [
    {
      name: "Sheriff",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559855573356744/sheriff.jpg",
    },
    {
      name: "Ara",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559708835627019/GLADYS.jpg",
    },
    {
      name: "Gnew",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559709804515369/GNEW.jpg",
    },
    {
      name: "Chixy",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559710647550003/JANE.jpg",
    },
    {
      name: "Riri",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559711540953098/JGURBANO.jpg",
    },
    {
      name: "Paulo Plays",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559823461752973/PAULO.jpg",
    },
    {
      name: "Mushi",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559824166400040/JOEL.jpg",
    },
    {
      name: "Yami",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559825022025881/JOSE.jpg",
    },
    {
      name: "Kanchoy",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559825793785919/KANCHOY.jpg",
    },
    {
      name: "Neku",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559826527793192/NEKU.jpg",
    },
    {
      name: "Phia",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559850737324174/SOPHIA.jpg",
    },
    {
      name: "Pitchy",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559852104654888/PITCHY.jpg",
    },
    {
      name: "Rizza",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559853170020382/RIZZA.jpg",
    },
    {
      name: "Ryan",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559854436696145/RYANM.jpg",
    },
    {
      name: "Jojo",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559863798370304/ZOREX.jpg",
    },
    {
      name: "Vicente",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559864788234280/VICENTE.jpg",
    },
    {
      name: "Kain Mo",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559865685807114/WILMER.jpg",
    },
    {
      name: "Jenella",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559866600181811/ZADGR.jpg",
    },
    {
      name: "Bubbles",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1135567199474569266/JOANNA_MAE.jpg",
    },
    {
      name: "Jiji",
      image:
        "https://cdn.discordapp.com/attachments/1130558223796154398/1130559707602505788/JIJI.jpg",
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
            className="m-2"
            onClick={() => {
              setShowModal(true);
              setMember(tambay);
            }}
          >
            <Image
              src={tambay.image}
              alt={tambay.name}
              height={200}
              width={100}
              quality={40}
            />
          </a>
        ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
            <a href="#"></a>
            <Image
              src={member.image}
              alt={member.name}
              width="400"
              height="400"
              className="mr-2 rounded-sm"
              loading="eager"
            ></Image>
          </div>
        </div>
      </Modal>
    </div>
  );
}
