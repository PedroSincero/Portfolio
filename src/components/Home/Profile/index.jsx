import ImageDefault from '../../../assets/ImageDefault.png';

export default function Profile() {
  return (
    <div className=" flex flex-col items-center flex-grow">
      <div className=" w-3/4">
          <img className=" w-full" src={ImageDefault} alt="default Image" />
      </div>
      <div>
        <p className=" text-lg text-secondary"><span className="text-primary">#</span>OpenToWork</p>
      </div>
    </div>
  );
}
