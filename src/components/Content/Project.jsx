import "./ContentStyle.css";
import { useState, useRef } from "react";
import img101 from "./img/project-1/Home.png";
import img102 from "./img/project-1/Choose.png";
import img103 from "./img/project-1/Practice.png";
import img104 from "./img/project-1/Conversation.png";
import img105 from "./img/project-1/Gameplay.png";
import img106 from "./img/project-1/Result.png";
import MyImg from "/src/assets/img/personal.jpg";

const PostComponent = () => {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const intervalRef = useRef({});

  const handleMouseEnter = (postId, imgArray) => {
    setHoveredPost(postId);
    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [postId]: 0,
    }));

    intervalRef.current[postId] = setInterval(() => {
      setCurrentImageIndex((prevState) => ({
        ...prevState,
        [postId]: (prevState[postId] + 1) % imgArray.length,
      }));
    }, 1000);
  };

  const handleMouseLeave = (postId) => {
    setHoveredPost(null);
    clearInterval(intervalRef.current[postId]);

    setCurrentImageIndex((prevState) => ({
      ...prevState,
      [postId]: 0,
    }));
  };

  const posts = [
    {
      id: 1,
      title: "Basket Way",
      href: "#",
      description:
        "This is Project Basketball Game for Education, An educational game that asks about rules, practices, and skills of each basketball position to help those interested in basketball enjoy basketball.",
      date: "2023-04-28",
      datetime: "2020-03-16",
      category: { title: "Design", href: "#" },
      imgProject: [img101, img102, img103, img104, img105, img106],
      tool: ["Figma", "Unity"],
      author: {
        name: "Thanawat Rojchanatimapong",
        role: "UI Designer",
        href: "#",
        imageUrl: MyImg,
      },
    },
    {
      id: 2,
      title: "Kookkai Express",
      href: "#",
      description:
        "Project Practice Web Design, This Project is UI Design about an Express Website, Made for upgrade design skills.",
      date: "2023-04-28",
      datetime: "2020-03-16",
      category: { title: "Design", href: "#" },
      imgProject: [img101, img102, img103, img104, img105, img106],
      tool: ["Figma"],
      author: {
        name: "Thanawat Rojchanatimapong",
        role: "UI Designer",
        href: "#",
        imageUrl: MyImg,
      },
    },
    {
      id: 3,
      title: "Cassava Suppliers Dashboard",
      href: "#",
      description: "",
      date: "2023-04-28",
      datetime: "2020-03-16",
      category: { title: "Data Analysis", href: "#" },
      imgProject: [img101, img102, img103, img104, img105, img106],
      tool: ["Power BI", "Figma"],
      author: {
        name: "Thanawat Rojchanatimapong",
        role: "Developer",
        href: "#",
        imageUrl: MyImg,
      },
    },
    {
      id: 4,
      title: "Stephen Curry Shot Chart 2023",
      href: "#",
      description:
        "โครงการส่งประกวด รายการ NSC 2023 ได้รับรางวัลระดับภาคตะวันออกเฉียงเหนือ",
      date: "2023-04-28",
      datetime: "2020-03-16",
      category: { title: "Data Analysis", href: "#" },
      imgProject: [img101, img102, img103, img104, img105, img106],
      tool: ["Power BI", "Figma"],
      author: {
        name: "Thanawat Rojchanatimapong",
        role: "Developer",
        href: "#",
        imageUrl: MyImg,
      },
    },
  ];

  return (
    <section className="bg-[var(--black-)] py-10 sm:pt-24" id="projectsId">
      <div className="mx-auto max-w-full px-6 lg:px-20">
        <div className="mx-auto max-w-full lg:mx-0 flex justify-center items-center">
          <h2 className="text-8xl font-[Yakin] font-bold tracking-wider text-[var(--yellow-)] sm:text-7xl">
            What Projects do I do ?
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => {
            const currentImgIndex = currentImageIndex[post.id] || 0;

            return (
              <article
                key={post.id}
                className={`post-item ${
                  hoveredPost === post.id ? "hovered" : ""
                } + flex max-w-xl sm:max-w-full flex-col p-3 items-start bg-white/5 drop-shadow-sm border-2 border-white/0 hover:border-[var(--yellow-)] transition-all`}
                onMouseEnter={() => handleMouseEnter(post.id, post.imgProject)}
                onMouseLeave={() => handleMouseLeave(post.id)}
              >
                <div className="imgProject mb-4">
                  <img
                    src={post.imgProject[currentImgIndex]}
                    className=""
                    alt=""
                  />
                </div>
                <div className="hidden items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-white/10 px-3 py-1.5 font-medium text-[var(--yellow-)] hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-2 text-2xl uppercase tracking-wide font-bold leading-6 text-[var(--yellow-)] group-hover:text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white">
                    {post.description.length > 150
                      ? `${post.description.substring(0, 100)}...`
                      : post.description}
                  </p>
                </div>
                {/* <div className="relative mt-8 flex items-center gap-x-4 px-4 pb-4">
                  <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-[var(--yellow-)]">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-white">{post.author.role}</p>
                  </div>
                </div> */}
              </article>
            );
          })}
        </div>
        <div className="mt-24 border-b-2 border-[var(--yellow-)]"></div>
      </div>
    </section>
  );
};

export default PostComponent;
