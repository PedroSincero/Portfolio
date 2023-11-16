export default function Skill({title, tecnologies }) {
  return (
    <div className="w-52">
      <h1 className="border border-secondary font-bold p-2">{title}</h1>
      <div className="border border-secondary p-2">
        <p>{ ...tecnologies }</p>
      </div>
    </div>
  )
}
