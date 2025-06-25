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
      <Categories></Categories>
      <BestGear></BestGear>
    </>
  );
}
