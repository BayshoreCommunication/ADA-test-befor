import Image from "next/image";
import PackageBulletPoint from "./PackageBulletPoint";

// const PackageService = ({ data , title} : any) => {
//   return (
//     <div className="w-[50rem] sm:w-[35rem] md:w-full justify-self-center mt-[4rem] md:mt-0 h-full flex flex-col justify-between ">
//       <div>
//         <div className=" relative flex flex-col items-center gap-8 bg-[#F0F6FE] py-[6rem] ">
//           <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
//             {/* <Image
//               src={data.icon}
//               alt="option"
//               width={200}
//               height={200}
//               className="w-[9rem] h-auto"
//             /> */}
//           </div>
//           <h4 className="heading-tertiary">{title}</h4>
//           {/* <p>
//             <span className="!text-primary !font-bold heading-secondary">
//               ${data.price}
//             </span>
//             /month
//           </p> */}
//         </div>
//         <div className="mb-8 px-8 py-12 flex justify-center">
//           <ul className="flex flex-col gap-4">
//             {data.map((el: any, i: number) => (
//               <PackageBulletPoint point={el} key={i} />
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="flex justify-center border-t-[1px] border-[rgba(221,221,221,0.5)] pt-3">
//         <div className="center">
//           <button className="btn text-small !py-6">Customize My Plan</button>
//         </div>
//       </div>
//     </div>
//   );
// };

const PackageService = ({ data, title }: any) => {
  return (
    <div className="sm:w-[35rem] w-full md:w-2/3 justify-self-center mt-[4rem] md:mt-0 h-full flex flex-col justify-between  rounded-[15px] ">
      <div className="shadow-lg rounded-bl-[15px] rounded-br-[15px]">
        <div className="relative flex justify-between items-center gap-8 bg-[#Ffffff]  rounded-tl-[15px] rounded-tr-[15px] border-[3px] border-[#fe6f1f]">
          {/* <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src={data.icon}
              alt="option"
              width={200}
              height={200}
              className="w-[9rem] h-auto"
            />
          </div> */}

          <h4 className="heading-four !text-white bg-[#fe6f1f] rounded-tr-[10px] rounded-tl-[10px] w-full py-5 ">
            {title}
          </h4>

          {/* <p className="-translate-x-[80%]">
            <span className="!text-primary !font-bold heading-secondary translate-x-[50%] ">
              ${data.price}
            </span>
            {/* /month */}
          {/* </p> */}
        </div>

        <div className="mb-8 px-8 py-12 flex justify-center ">
          <ul className="flex flex-col gap-4 ">
            {data.map((el: any, i: number) => (
              <PackageBulletPoint point={el} key={i} />
            ))}
          </ul>
        </div>
      </div>
      {title === "Our Offer" && (
        <div className="flex justify-center pt-3">
          <div className="center !py-5">
            <button className="btn text-small !py-6 !px-8">
              Customize My Plan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageService;
