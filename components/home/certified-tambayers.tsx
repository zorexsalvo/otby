"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Modal from "@/components/shared/modal";
import data from "./data";

export default function CertifiedTambayers() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="m:px-0 z-10 w-full max-w-4xl pt-24 xl:px-20">
      <h4
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
      <Balancer>Honorable Tambayer</Balancer>
      </h4>
        <div className="flex justify-center">
        <Image
          src="/avatars/armina.png"
          alt="Armina"
          height={200}
          width={100}
        />
        </div>
      <h4
        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      >
        <Balancer>Certified Tambayers</Balancer>
      </h4>
      <div className="flex flex-wrap justify-center">
        {data.map((tambay) => (
          <a
            key={tambay.name}
            className="m-2"
            onClick={() => {
              setShowModal(true);
              setName(tambay.name);
              setImage(tambay.image);
            }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={tambay.image}
              alt={tambay.name}
              height={200}
              width={100}
            />
          </a>
        ))}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
          <div
            className="' flex
          flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16"
          >
            <a href="#"></a>
            <Image
              src={image}
              alt={name}
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
