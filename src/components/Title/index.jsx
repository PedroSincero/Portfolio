export default function Title({ title, span, subTitle }) {
  return (
    <div>
      <p className='text-4xl font-bold'>
        <span className='text-primary' id='projects'>
          {span}
        </span>{title}
      </p>
      {
        subTitle && <p className=' text-secondary pt-3'>{subTitle}</p>
      }
    </div>
  )
}
