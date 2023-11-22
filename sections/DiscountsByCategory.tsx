import Carousel from "../islands/Carousel/index.tsx";
import DiscountCard, {
  Props as Category,
} from "../components/DiscountCard/index.tsx";
import SectionTitle from "../components/SectionTitle/index.tsx";

interface Props {
  categories?: Category[];
}

export default function DiscountsByCategory({
  categories = [
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
    { category: "ELETRODOMÉSTICOS", discount: 30, link: "#" },
  ],
}: Props) {
  return (
    <section className="bg-[#171111] py-[8vw] sm:p-[8vw]">
      <div className="w-full flex justify-center sm:justify-start">
        <SectionTitle
          invertMarkedText
          symbol="%"
          text="POR CATEGORIA"
          markedText="DESCONTOS"
        />
      </div>

      {/* desktop design */}
      <div
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%/3, max(190px, 100%/5)), 1fr))",
        }}
        className="hidden md:grid overflow-hidden gap-4"
      >
        {categories.map((category) => {
          return (
            <DiscountCard
              category={category.category}
              discount={category.discount}
              link={category.link}
            />
          );
        })}
      </div>

      {/* mobile design */}
      <Carousel categories={categories} class="grid md:hidden" />
    </section>
  );
}
