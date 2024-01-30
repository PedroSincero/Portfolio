import ImageDefault from '../../../../assets/ImageDefault.png';
import Logo from '../../../../assets/Logo.png';
import Dots from '../../../../assets/Dots.png';

export default function Profile() {
  return (
    <div className=" flex flex-col items-center flex-grow">
      <div>
        <div className='relative'>
          <img className='absolute right-0 -bottom-60 lg:-bottom-80 z-10' src={Dots} alt="Dots" />
        </div>
        <div className='relative'>
          <img className='absolute -z-10' src={Logo} alt="Logo" />
        </div>
        <img src={ImageDefault} alt="default Image" />
      </div>
        <div className=" p-2 items-center border border-secondary">
          <p className=" text-lg text-secondary"><span className="text-primary"># </span>Em Busca de novas <span className="text-white font-bold">Oportunidades</span></p>
        </div>
    </div>
  );
}
