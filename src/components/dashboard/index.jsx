import React from "react";
// import { HiMenuAlt3 } from "react-icons/hi";

import { PiNumberCircleTwoLight,PiNumberCircleThreeLight,PiNumberCircleFourLight,PiNumberCircleFiveLight,PiNumberCircleSixLight} from "react-icons/pi";


import {  AiOutlineClose } from "react-icons/ai";
import { PiNumberCircleOneLight} from "react-icons/pi";

import { Link } from "react-router-dom";


const Dashboard = ({ open, setOpen }) => {
  const menus = [
    { name: "", link: "/portada", icon: PiNumberCircleOneLight },
    { name: "", link: "/educacion", icon: PiNumberCircleTwoLight },
    { name: "", link: "/", icon: PiNumberCircleThreeLight},
    { name: "", link: "/money", icon: PiNumberCircleFourLight},
    { name: "", link: "/", icon: PiNumberCircleFiveLight },
    { name: "", link: "/", icon: PiNumberCircleSixLight},
   
  ];
 
  return (
    <section className="relative flex border- ">
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen   ${
          open ? "block" : "hidden"
        } `}
      ></div>
      <div
        className={`absolute min-h-screen    ${
          open ? "lg:w-[260px] bg-[#2E2E2E]     " : " invisible"
        } duration-500 text-black-100`}
      >
             <div className="w-[260px] h-[64px] bg-[#EB3A00] flex justify-between items-center pr-6">
          <div className="flex items-center pl-3 gap-[10px]">
            <svg
              width="35"
              height="40"
              viewBox="0 0 42 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.1672 32.8273L33.7988 15.5255C33.4713 14.707 32.5435 14.3248 31.7246 14.707L23.1554 18.3638C21.7909 17.2724 19.7715 17.5998 19.3893 17.6542C17.0426 17.2719 15.4595 16.2352 14.3136 15.4163C14.641 15.1433 15.5688 13.9973 13.0036 12.5781C12.6213 12.3599 12.2395 12.0869 12.0757 11.9232C11.4209 11.2136 11.1479 10.2857 11.0386 9.95836C11.5846 8.86686 11.2568 7.17489 10.1108 5.75562C10.1108 5.64635 10.1653 5.53747 10.1108 5.4282C10.1108 5.10078 9.94711 4.8278 9.67413 4.60966C9.45598 4.44595 9.23744 4.33668 8.96448 4.33668L9.01892 4.28224C9.23707 4.06408 9.2919 3.79111 9.2919 3.51814C9.2919 3.19072 9.07374 2.80849 8.74594 2.48103C8.90965 2.31732 9.12819 2.09878 9.23707 1.93507C10.6016 0.516095 10.929 -0.139058 10.4378 0.0245839C10.2741 0.0790263 6.50808 2.69909 4.97985 1.38908C4.65243 1.1161 3.83348 1.1161 3.66983 1.55279L3.23315 2.31689L2.35978 2.42615C1.65013 2.4806 1.48642 3.4084 1.86865 3.79065C3.94278 6.13739 0.340419 8.43013 0.449676 8.86638C0.558942 9.1938 1.15933 8.92082 2.08717 8.32042C1.9779 8.70267 1.9779 9.13896 2.14161 9.63044C1.9779 9.79415 0.995238 10.9949 1.65048 12.5776C2.14161 13.8328 1.54121 14.5424 1.05008 15.0335C0.667838 15.4158 1.15935 15.6884 1.43233 15.4702C1.81457 15.1428 2.96056 14.1602 2.19642 12.359C1.81418 11.3767 2.19642 10.5579 2.41458 10.2304C2.46902 10.3396 2.46902 10.3941 2.52384 10.5034C3.56096 12.0316 3.7246 12.6864 3.17868 13.6146C2.46903 14.9246 3.72464 16.2343 3.77908 16.2343C4.05206 16.4525 4.54318 16.1251 4.21577 15.7976C4.21577 15.7976 3.23353 14.7605 3.72464 13.8328C4.43429 12.5775 4.05206 11.6498 3.01498 10.1215C2.14162 8.81153 2.74201 7.88367 2.96054 7.61067C3.01498 8.15663 3.23352 9.19329 4.1613 9.95741C4.10686 10.5034 4.1613 11.0489 4.32501 11.5949C4.37945 11.8131 4.48872 11.9771 4.54316 12.1409C4.43389 12.3046 3.88832 13.3961 4.76131 14.8698C5.08874 15.4702 5.14356 16.1251 4.81576 16.5617C4.54278 16.9984 4.05166 17.1621 3.45126 17.1077C2.90531 17.0532 2.90531 17.7081 3.39682 17.7081C3.99722 17.7081 4.97944 17.4351 5.30731 16.8895C5.744 16.2347 5.68955 15.3613 5.25287 14.5972C4.76173 13.7786 4.81618 13.0689 4.97989 12.7416C5.19804 13.0145 5.47102 13.2327 5.74399 13.342C6.07141 13.5057 6.34438 12.9597 6.01696 12.796C5.52583 12.5779 5.1436 12.0319 4.92546 11.377C4.8162 11.0496 4.76175 10.6674 4.76175 10.2855C4.97991 10.3948 5.19844 10.5037 5.41659 10.613C6.3444 10.9404 6.89035 11.4863 7.05409 12.1956C7.27224 13.0141 6.83593 13.8331 6.45369 14.3242C6.12627 14.7064 6.67184 14.9246 6.89038 14.7064C7.43633 14.106 7.87262 13.0689 7.65448 12.0319C7.49077 11.4315 7.05408 10.5582 5.63512 10.067C5.3077 9.95778 5.03472 9.79407 4.81658 9.6848C4.87102 9.41183 4.98029 9.0844 5.08955 8.81144C5.19882 8.97515 5.36253 9.13886 5.4718 9.24813C6.18145 10.0122 7.00003 10.5034 7.76415 10.7764C8.14639 11.3768 8.58269 12.359 8.25528 12.7957C7.81859 13.1231 7.43674 13.7235 7.38192 14.7606C7.32747 15.907 7.87305 16.6711 8.30972 17.2715C8.47343 17.5444 8.63715 17.7626 8.69197 17.8719C8.80124 18.5815 8.36455 20.8738 8.20084 21.6923C8.09157 22.6202 8.20084 23.548 8.52826 24.4213L0.996147 27.6414C0.613903 27.8052 0.286493 28.1326 0.122783 28.5148C-0.0409275 28.8971 -0.0409275 29.3333 0.122783 29.7156L7.49125 47.0174C7.65496 47.3996 7.98238 47.727 8.36462 47.8907C8.58277 47.9452 8.74686 48 8.96501 48C9.18317 48 9.4017 47.9456 9.56541 47.8907L40.1301 34.9007C41.1672 34.5741 41.4946 33.5914 41.1672 32.8273ZM23.5925 18.8003L31.9432 15.2528C32.4344 15.0347 33.0347 15.2528 33.2532 15.7988L38.0564 27.0422L17.2069 35.8292C16.8795 35.7199 16.4428 35.5562 16.2791 35.447C17.4798 34.7921 19.0625 33.0453 20.3181 31.2442C22.7197 27.6967 23.3201 24.5855 21.9007 22.8935C20.9185 21.802 19.4447 21.3109 17.6435 21.3109L19.554 20.4923C23.7015 22.5117 23.92 19.0186 23.5927 18.8005L23.5925 18.8003ZM18.5164 25.8409C15.1326 28.2969 12.7854 27.8058 11.5847 27.1509C9.83792 26.1687 8.74642 24.149 8.91016 22.1296C9.61982 22.1296 13.5496 22.184 13.7133 22.184C13.3859 22.3478 13.4951 22.8389 13.9314 22.73C17.2608 21.5292 19.9898 21.7478 21.4635 23.3304C23.2647 25.5134 20.6995 29.7706 19.8261 30.9714C18.2978 33.2637 16.6059 34.7919 15.7871 35.1193C16.1145 34.246 16.2237 33.4275 16.2782 32.6085C16.4419 30.971 16.4963 29.1699 18.8434 26.332C19.1716 25.8957 18.8986 25.5135 18.5164 25.8409ZM14.1499 18.964C15.4599 19.5644 18.4071 20.5466 18.7345 19.9462C18.789 20.0007 18.8982 20.0555 19.0075 20.1099L15.5144 21.5837C14.5866 20.9833 14.2047 19.6188 14.1499 18.964ZM18.8438 37.3028C17.097 37.4665 14.368 37.0298 15.4052 35.6653C15.5689 35.7197 15.7874 35.7197 15.8418 35.6653C16.4422 36.3201 17.5886 36.4838 18.0797 36.5387C19.3897 36.7568 19.2261 37.2483 18.8438 37.3028ZM19.5534 18.1999C20.0446 18.0906 23.2647 17.8176 23.1558 19.4551C23.1558 19.7281 22.4461 21.966 19.0078 19.5644C19.2804 18.8547 19.4442 18.3636 19.5534 18.1999ZM8.41916 2.86293C8.69213 3.13591 8.8014 3.35406 8.8014 3.51777C8.8014 3.62704 8.74696 3.73592 8.69213 3.84519C8.58287 3.95446 8.41916 4.06334 8.30989 4.17261C8.03691 4.0089 7.70949 3.89963 7.43653 3.79037C7.76395 3.51777 8.09137 3.19035 8.41916 2.86293ZM6.89092 4.28191C7.10908 4.33635 7.32761 4.39117 7.60058 4.50006C7.16389 4.60933 6.72721 4.66377 6.45421 4.71821C6.61792 4.55488 6.72683 4.44562 6.89092 4.28191ZM4.81679 8.32091C4.65308 8.64833 4.54381 8.97575 4.43455 9.30315C3.56118 8.37534 3.67045 7.2838 3.67045 7.22902V7.11976C3.83416 7.01049 3.99787 6.84678 4.2164 6.68307C4.32567 7.2294 4.54382 7.77492 4.81679 8.32091ZM5.14421 7.61126C4.92606 7.17457 4.76197 6.68345 4.70752 6.24676C4.9805 6.02861 5.25348 5.75563 5.52607 5.48266C5.63533 5.97379 5.5809 6.62901 5.14421 7.61126ZM6.01758 8.92127C5.85387 8.70311 5.63533 8.48458 5.47162 8.26643C6.12646 6.90193 6.18128 5.97408 6.07202 5.31931H6.12646C6.39944 5.31931 7.1087 5.31931 7.87321 5.04634C7.76394 5.31931 7.76395 5.59229 7.81877 5.81043L7.32764 6.30156C7.21837 6.30156 6.61798 6.24712 6.23614 6.68381C5.69019 7.33865 6.01799 8.10279 6.34541 8.37569C7.00025 8.92164 7.81916 8.48495 8.03728 8.26642C8.47397 7.77529 8.3647 7.01118 7.87357 6.57454L8.09173 6.35639C8.85583 6.95679 9.61996 6.57454 9.83848 6.35639C10.8756 7.77537 11.0937 9.35838 10.2752 10.0676C9.34698 10.9406 7.43655 10.3947 6.01758 8.92127ZM8.14619 14.8704C8.14619 12.9599 9.94732 12.6325 10.7659 13.3421C14.5864 16.7808 17.8065 17.9267 18.8984 18.1453C18.7891 18.4182 18.5162 18.9094 18.2436 19.5642C16.661 19.455 11.6392 17.8724 9.29248 14.6522C9.18322 14.4885 8.80135 14.4885 8.74653 14.816C8.74653 15.3071 8.91024 16.4534 10.111 17.5994C11.3663 18.7458 11.3118 20.9288 11.3118 21.5292C10.3295 21.5292 9.45616 21.5292 8.96504 21.4747C9.12875 20.6562 9.61988 18.5276 9.40173 17.8179C9.29208 17.2719 8.14619 16.8352 8.14619 14.8704ZM5.63532 40.7958L0.832203 29.5523C0.722936 29.2794 0.722936 29.0064 0.832203 28.7882C0.941469 28.5153 1.10518 28.3516 1.37816 28.2423L8.91027 25.0222C9.45622 26.1137 10.2748 27.0415 11.3119 27.6419C13.1675 28.679 15.3509 28.5153 17.534 27.2052C16.0602 29.552 15.8965 31.0806 15.7872 32.4451C15.678 33.3729 15.6235 34.1918 15.1868 35.1741C14.5864 35.7745 14.5864 36.4293 14.9687 36.7567L5.63532 40.7958ZM40.1298 34.3552L9.56507 47.3452C9.34692 47.4544 9.07394 47.4544 8.80097 47.3452C8.528 47.2359 8.36429 47.0722 8.25502 46.7992L7.87277 45.9258L40.2932 32.1172L40.6754 32.9905C40.8391 33.5365 40.621 34.1369 40.1299 34.355L40.1298 34.3552Z"
                fill="#AACCFF"
              />
            </svg>

            <h1
              className={`text-[#AACCFF] text-2xl font-extrabold font-[Raleway] text-center cursor-pointer`}
            >
              WalletPay
            </h1>
          </div>
          <AiOutlineClose
            size={26}
            className="text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="relative flex flex-col gap-1 lg:pl-20  mt-12">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`  ${
                menu?.margin && "  "
              }  hover:text-[#EC6625] font-medium lg:pl-4 py-4  rounded-md text-[#FFFEFE]`}
            >
              <div
                className={`whitespace-pre duration-500     ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {React.createElement(menu?.icon, { size: "40" })}
              </div>

              <h2
              
                className={`whitespace-pre duration-300  ${
                  !open && "opacity-0 translate-x-28 overflow-hidden "
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#FFFEFE] font-semibold whitespace-pre  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      
      </div>
    </section>
  );
};

export default Dashboard;