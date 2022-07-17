import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <div className="p-4">
      <h1>DC Page</h1>
      <hr />

      <HeroList publisher={'DC Comics'}/>
    </div>
  );
};
