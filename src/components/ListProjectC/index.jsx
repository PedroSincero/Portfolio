export default function ListProjectC({ image, tag, title, description, live, code }) {
  return (
    <div className=" border-secondary text-secondary text-xl w-80">
      {
        image && <img className='w-96 h-64' src={image} alt={title}  />
      }
    <div className='border border-secondary p-3'>
      <p>{tag}</p>
    </div>
    <div className=' flex flex-col gap-4 border border-secondary p-4 '>
      <h1 className=' text-white text-2xl font-bold'>{title}</h1>
      <p>{description}</p>
      <div className='flex gap-5'>
        {
          live && <a href={live} target="_blank" rel="noreferrer"><button className='border border-secondary px-4 py-2' type="button">{'Live <~>'}</button></a>
        }
        {
          code && <a href={code} target="_blank" rel="noreferrer"> <button className='border border-secondary px-4 py-2' type="button">{'Github >='}</button></a>
        }
      </div>
    </div>
  </div>
  );
}
