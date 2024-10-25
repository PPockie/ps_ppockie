import "./ContentStyle.css";
import html from "./img/skill/html.png";
import css from "./img/skill/css.png";
import js from "./img/skill/javascript.png";
import python from "./img/skill/python.png";
import react from "./img/skill/react.png";
import tailwind from "./img/skill/tailwind.png";
import bootstrap from "./img/skill/bootstrap.png";
import figma from "./img/skill/figma.png";

function SkillComponent() {
  const skills = [
    {
      id: 1,
      title: "HTML",
      rank: "Advanced",
      icon: html,
      category: "Frontend",
    },
    {
      id: 2,
      title: "CSS",
      rank: "Advanced",
      icon: css,
      category: "Frontend",
    },
    {
      id: 3,
      title: "Javascript",
      rank: "Beginner",
      icon: js,
      category: "Frontend",
    },
    {
      id: 4,
      title: "Python",
      rank: "Intermediate",
      icon: python,
      category: "Backend",
    },
    {
      id: 5,
      title: "Tailwind CSS",
      rank: "Intermediate",
      icon: tailwind,
      category: "Frontend",
    },
    {
      id: 6,
      title: "Bootstrap",
      rank: "Intermediate",
      icon: bootstrap,
      category: "Frontend",
    },
    {
      id: 7,
      title: "React",
      rank: "Beginner",
      icon: react,
      category: "Frontend",
    },
    {
      id: 8,
      title: "Figma",
      rank: "Advanced",
      icon: figma,
      category: "UI Design",
    }
  ];

  return (
    <section className="skillComponent bg-[var(--black-)]" id="skillsId">
      <div className="title flex justify-center items-center py-4 mb-4">
        <h2 className="font-semibold tracking-wide text-7xl text-[var(--h-pink-)] font-[Yakin] uppercase">What skills do I have ?</h2>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 px-[15rem] py-8 pb-28">
        {skills.map((skill) => {
          return (
            <div
              className="item bg-white/5 flex items-center px-8 py-6 drop-shadow-md border-2 border-white/0 hover:border-[var(--h-pink-)] transition-all"
              key={skill.id}
            >
              <img
                src={skill.icon}
                alt={skill.title + " logo icon"}
                className="h-16 aspect-square"
              />
              <div className="itemInfo flex flex-col">
                <p className="text-xs text-white/70">{skill.category}</p>
                <h2 className="text-2xl font-bold text-[var(--h-pink-)]">
                  {skill.title}
                </h2>
                <h5 className="text-lg text-[var(--white-)]">{skill.rank}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mx-20 border-b-2 border-[var(--h-pink-)]"></div>
    </section>
  );
}
export default SkillComponent;
