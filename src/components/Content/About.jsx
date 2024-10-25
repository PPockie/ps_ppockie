import "./ContentStyle.css";

function aboutMe() {
  return (
    <section
      className="w-full h-auto  pt-8 mt-[5.60rem] pb-32 bg-[var(--black-)]"
      id="aboutId"
    >
      <div className="row flex px-[15rem] py-8 pt-20 justify-start">
        <div className="about">
          <span className="word-space flex tracking-widest justify-start uppercase text-[var(--purple-)]">
            Welcome to my space ◆
          </span>
          <div className="info flex flex-col">
            <span className="text-[var(--white-)] text-5xl leading-relaxed my-4 mb-8 font-semibold text-center">
              ฉันเป็น UI/UX Designer และ Front-End Developer, ออกแบบ และพัฒนา
              Website Interface โดยมุ่งเน้นถึงความสวยงาม และใช้งานง่าย
            </span>
            <span className=" text-white/70 text-xl my-4 mt-8 text-center">
              พื้นที่นี้เป็นพื้นที่เอาไว้แสดงผลงานต่างๆ ที่ฉันคิดและทำมา -
              ฉันหวังว่าคุณจะชื่นชอบ และเพลิดเพลินไปกับมัน
            </span>
            {/* ฉันเป็น UI/UX Designer และ Web Developer
            ที่มีความชื่นชอบในการสร้างเว็บไซต์ที่สวยงาม และใช้งานง่าย
            ด้วยประสบการณ์ที่เรียนรู้มาในการออกแบบ พัฒนาเว็บไซต์ ในส่วน UI
            Design และ Front-End โดยออกแบบด้วยFigmaพัฒนาด้วยHtml ,Css ,Js ,Boostrap ,Tailwind Css
            ฉันมักมองหางาน
            หรือโอกาสในการรวบรวมความคิดสร้างสรรค์เข้าไปช่วยในการแก้ปัญหา
            และนำประสบการณ์ต่างๆมา พัฒนาทักษะในการทำงาน พัฒนาความคิด แนวคิดต่างๆ
            เพื่อเป็นตัวเองในรูปแบบที่ดีขึ้น ทั้งในเรื่องการทำงาน และการใช้ชีวิต */}
          </div>
          <div className="more-action flex mt-10 justify-center">
            <span className="w-fit px-8 py-4 relative uppercase bg-[var(--purple-)] text-[var(--white-)] hover:tracking-widest group transition-[letter-spacing,color] ease-in-out">
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-white/20 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมซ้ายบน */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-white/20 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมขวาล่าง */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-white/20 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              {/* บวกมุมซ้ายล่าง */}
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute w-[15px] h-[15px] fill-white/20 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
              </svg>
              <i className="ri-arrow-right-line mr-2 text-[var(--white-)]"></i>
              more about me
              <i className="ri-arrow-left-line ml-2 text-[var(--white-)]"></i>
            </span>
          </div>
          {/* <span className="flex uppercase mt-10 text-[var(--white-)] hover:tracking-widest group hover:text-[var(--purple-)] transition-[letter-spacing,color] ease-in-out">
            <i className="ri-arrow-right-line mr-2 text-[var(--white-)] group-hover:text-[var(--purple-)]"></i>
            more about me
            <i className="ri-arrow-right-line ml-2 text-[var(--white-)] group-hover:text-[var(--purple-)]"></i>
          </span> */}
        </div>
      </div>
    </section>
  );
}
export default aboutMe;
