import AllMedias from "./AllMedias";
import Contact from "./Contact";

export default function Contacts() {
  return (
    <div>
      <div className="py-8 px-8 lg:px-32 min-[1920px]:px-48">
        <Contact />
        <AllMedias />
      </div>
    </div>
  );
}
