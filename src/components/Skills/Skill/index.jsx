export default function Skill({title, tecnologies }) {
  return (
    <div className="w-56">
      <h1 className="border border-secondary font-bold p-2 text-2xl">{title}</h1>
      <div className="border border-secondary p-2 text-xl">
        <p>{ ...tecnologies }</p>
      </div>
    </div>
  )
}
