import Image from "next/image";
import PackageBulletPoint from "./PackageBulletPoint";
import Link from "next/link";

const Package = ({ data }: any) => {
  return (
    <div className="sm:w-[35rem] w-full md:w-1/3 justify-self-center mt-[4rem] md:mt-0 h-full flex flex-col justify-between  rounded-[15px] ">
      <div className="shadow-lg rounded-bl-[15px] rounded-br-[15px]">
        <div className=" relative flex justify-between items-center gap-8 bg-[#Ffffff]  rounded-tl-[15px] rounded-tr-[15px] border-[3px] border-[#fe6f1f]">
          {/* <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={data.icon}
              alt="option"
              width={200}
              height={200}
              className="w-[9rem] h-auto"
            />
          </div> */}

          <h4 className="heading-four !text-white bg-[#fe6f1f] rounded-tr-[13px] rounded-tl-[10px] w-[50%] py-8 ">
            {data.title}
          </h4>

          <p className="md:-translate-x-[80%] -translate-x-[150%]">
            <span className="!text-primary !font-bold heading-secondary translate-x-[50%] ">
              ${data.price}
            </span>
            {/* /month */}
          </p>
        </div>

        <div className="mb-8 px-8 py-12 flex justify-center ">
          <ul className="flex flex-col gap-4 ">
            {data.points.map((el: any, i: number) => (
              <PackageBulletPoint point={el} key={i} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <div className="center !py-5">
          <Link href={`/contact`} className="btn text-small !py-6 !px-8 r-button border-2 border-primary hover:text-primary">
            Customize My Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package;
