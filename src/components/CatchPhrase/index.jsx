import Quotes from '../../assets/Quotes.svg';

export default function CatchPhrase({ phase, author }) {
  return (
    <div className=" hidden lg:flex flex-col self-center text-center">
      <div className=" inline-block mt-10 p-8 gap-3 border border-secondary text-2xl font-bold">
        <div className='relative'>
          <img className='absolute bottom-4 -left-3 bg-background p-1' src={Quotes} alt="" />
        </div>
        <p>
          { phase }
        </p>
        <div className='relative'>
          <img className='absolute top-4 -right-3 bg-background p-1 transform -scale-x-100' src={Quotes} alt="" />
        </div>
      </div>
      <div className=" self-end p-8 border border-secondary text-2xl ">
        <p>{` - ${author}`}</p>
      </div>
    </div>
  );
}
