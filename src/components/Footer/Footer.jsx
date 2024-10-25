import "./FooterStyle.css";

const footerSection = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-auto py-8 pt-12 bg-[var(--blue-)] overflow-hidden">
      <div className="row grid grid-cols-4 mb-20">
        <div className="logo pl-20 col-span-3">
          <a href="#" className="-m-1.5 p-1.5 flex items-start">
            <div className="logo font-bold uppercase font-[Yakin] text-3xl pr-[4.5rem] px-10 py-4 text-[var(--white-)] tracking-wider bg-[var(--black-)] text w-fit cursor-default relative hover:tracking-normal transition-all">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-black/20 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมซ้ายบน */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-black/20 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมขวาล่าง */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-black/20 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมซ้ายล่าง */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-black/20 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              PPockie
            </div>
          </a>
          <div className="quote mt-4 text-sm tracking-[0.75em]">
            {"- Roltworthy -"}
          </div>
        </div>
        <div className="contact" id="contactId">
          <div className="contactHeader uppercase text-lg font-semibold mb-4">
            If you interested in me?
          </div>
          <div className="contactBody">
            <ul className="pl-4">
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="var(--white-)"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  Linkin
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="var(--white-)"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  Github
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--white-)"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                  </svg>
                  Email
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="var(--white-)"
                  >
                    <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row  flex gap-8 items-center justify-center">
        <div className="copyright flex gap-4">
          <p className="text-4xl font-[Yakin] tracking-wider">Copyright</p>
          {currentYear === 2024 ? (
            <p className="text-4xl font-[Yakin] tracking-wider">
              {currentYear}
            </p>
          ) : (
            <p className="text-4xl font-[Yakin] tracking-wider">
              2024 - {currentYear}
            </p>
          )}
          <p className="text-4xl font-[Yakin] tracking-wider">
            Multi Yaak, All right Reserved.
          </p>
        </div>
        <div className="credit">
          <p className="text-4xl font-[Yakin] tracking-wider">
            Credit by PPockie!
          </p>
        </div>
      </div>
    </footer>
  );
};
export default footerSection;
