"use client";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Link from "next/link";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const AccorDion = ({ title, body }: any) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} key={1} />}>
      <div className="px-8   ">
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="text-[16px] md:text-[18px] font-normal">{title}</div>
        </AccordionHeader>
      </div>
      <div className="">
        <AccordionBody>
          <div className=" ">
            <div className="px-8 !py-8 ">{body}</div>

            <div className="mx-auto text-center mb-8 ">
              <Link href="mailto:jobs@bayshorecommunication.com">
                <button
                  className="btn mt-4 text-small px[137px] mx-auto "
                  type="button"
                >
                  Apply
                </button>
              </Link>
            </div>
          </div>
        </AccordionBody>
      </div>
    </Accordion>
  );
};

export default AccorDion;
