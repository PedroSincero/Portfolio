import ImageDefault from '../../../assets/ImageDefault.png';

export default function Profile() {
  return (
    <div className=" flex flex-col items-center flex-grow">
      <div >
          <img src={ImageDefault} alt="default Image" />
      </div>
        <div className=" p-2 items-center border border-secondary">
          <p className=" text-lg text-secondary"><span className="text-primary"># </span>Em Busca de novas <span className="text-white font-bold">Oportunidades</span></p>
        </div>
    </div>
  );
}
