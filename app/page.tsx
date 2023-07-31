import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default async function Home() {
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
  ];
  return (
    <>
      <div className="z-10 w-full h-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Online Tambayan Community</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>a community filo of gamers and streamers</Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        ></div>
      </div>

      <div className="z-10 w-full max-w-4xl px-5 pt-24 xl:px-20">
        <h4
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-4xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Certified Tambayers</Balancer>
        </h4>
        <div className="flex flex-wrap">
          {certifiedTambayers.map((tambay) => (
            <div key={tambay.name} className="m-2">
              <Image
                src={tambay.image}
                alt={tambay.name}
                height={200}
                width={100}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
