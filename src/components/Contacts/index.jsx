import Line from '../../assets/Line7.svg';
import Discord from '../../assets/Discord (1).svg';
import Email from '../../assets/Email (1).svg'

export default function Contacts() {
  return (
    <>
      <div className="hidden lg:flex pb-12">
        <p className='text-4xl font-bold'><span className='text-primary'>#</span>Contacts</p>
        <img className=' w-2/4 px-5 pr-20' src={Line} alt="Line" />
      </div>
  
    <div className='flex'>
      <div>
        <p>
          Estou interessado em oportunidades freelance. No entanto, se você tiver outra solicitação ou dúvida, não hesite em entrar em contato comigo
        </p>
      </div>

      <div className='flex flex-col w-96 border border-secondary p-4'>
        <h1 className=' text-2xl font-bold p-1'> Mande uma Mensagem o/</h1>
        <div className='flex text-xl gap-1 p-1'>
          <img src={Discord} alt="discord logo" />
          <p>pedrosincero</p>
        </div>
        <div className='flex text-xl gap-1 p-1'>
          <img src={Email} alt="email logo" />
          <p>dckpedro@gmail.com</p>
        </div>
      </div>

    </div>
    </>
  )
}
