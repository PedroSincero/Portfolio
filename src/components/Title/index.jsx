export default function Title({ title, span, subTitle }) {
  return (
    <div>
      <p className='text-4xl font-bold py-8'>
        <span className='text-primary' id='projects'>
          {span}
        </span>{title}
        {
          subTitle && <p className=' text-sm font-normal text-secondary pt-3'>{subTitle}</p>
        }
      </p>
    </div>
  )
}
