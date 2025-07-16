import Image from "next/image";
import cat1 from "../../img/cat_1.png";
import cat2 from "../../img/cat_2.png";
import cat3 from "../../img/cat_3.png";

export default function Mascots() {
  return (
    <section className="bg-white py-12 flex justify-center gap-16">
      <div className="w-32 h-32 relative">
        <Image src={cat1} alt="Cat 1" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="w-32 h-32 relative">
        <Image src={cat2} alt="Cat 2" fill style={{ objectFit: "contain" }} />
      </div>
      <div className="w-32 h-32 relative">
        <Image src={cat3} alt="Cat 3" fill style={{ objectFit: "contain" }} />
      </div>
    </section>
  );
}
