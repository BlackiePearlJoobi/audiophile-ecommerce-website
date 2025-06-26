import BestGear from "../components/BestGear";
import Categories from "../components/Categories";

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="-mt-[32px] mb-[85px] sm:-mt-[52px] sm:mb-[53px] lg:mb-[93px]">
        <Categories></Categories>
      </div>
      <div className="lg:-mb-[40px]">
        <BestGear></BestGear>
      </div>
    </>
  );
}
