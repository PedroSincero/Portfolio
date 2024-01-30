import Title from "../../../components/Title";

export default function Funfacts() {
  return (
    <div>
      <Title title={"my-fun-facts"} span={"#"} />
      <div className=" inline-flex flex-wrap gap-3 w-3/5">
        <p className="border border-secondary p-2 text-secondary">
          I like more than summer
        </p>
        <p className="border border-secondary p-2 text-secondary">
          I often bike with my friends
        </p>
        <p className="border border-secondary p-2 text-secondary">
          I like <strong>Pizza</strong> and <strong>Pasta</strong>{" "}
        </p>
        <p className="border border-secondary p-2 text-secondary">
          I was in <strong>Egypt</strong>, <strong>Poland</strong> and{" "}
          <strong>Turkey</strong>
        </p>
        <p className="border border-secondary p-2 text-secondary">
          My favorite movie is <strong>The Green Mile</strong>
        </p>
        <p className="border border-secondary p-2 text-secondary">
          I am still in school
        </p>
        <p className="border border-secondary p-2 text-secondary">
          I don`t have any siblings
        </p>
      </div>
    </div>
  );
}
