import defaultImage from '../../../../assets/dImage.jpg';

export default function ListProjects() {
  return (
    <div className="border border-secondary text-secondary text-xl w-80">
      <img className='w-96 h-64' src={defaultImage} alt=""  />
      <div className='border border-secondary p-3'>
        <p>HTML SCSS Python Flask </p>
      </div>
      <div className=' flex flex-col gap-4 border border-secondary p-4 '>
        <h1 className=' text-white text-2xl font-bold'>ChertNodes</h1>
        <p>Minecraft server hosting</p>
        <div className='flex gap-5'>
          <button className='border border-secondary px-4 py-2' type="button">{'Live <~>'}</button>
          <button className='border border-secondary px-4 py-2' type="button">{'Cached >='}</button>
        </div>
      </div>
    </div>
  )
}
