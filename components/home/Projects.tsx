import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@iconify/react";
// import AOS from 'aos';
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const projects = [
    {
      title: "Tinder Clone",
      desc: " This is a tinder clone made with mern stack . It has all the features like signup/login, advanced authentication, matching people by swiping right and messaging them. Make and account and start texting.",
      link: "https://tinder-rust.vercel.app",
      github: "https://github.com/Kristar1/tinderapp",
      img: "assets/tinder.png",
      stack: ["akar-icons:html-fill", "cib:css3-shiled", "cib:javascript"],
    },
    {
      title: "Modern Blog Website",
      desc: "A blog website made with cutting edge technologies like Next.js and Graph QL with modern design and seo. The users can browse blogs on different topics and even comment on their favourite blog.",
      link: "https://blogapp-krish.vercel.app/",
      github: "https://github.com/Kristar1/blog",
      img: "assets/blog.jpeg",
      stack: ["logos:nextjs-icon", "bxl:tailwind-css"],
    },
    {
      title: "Memory Game",
      desc: " It`s a memory game to remember a card. 12 cards drawn on board, user needs to select a card. The card flip and show a image. Now user needs to select any other card. If both the cards matches, both cards will be matched else the second card flip back .",
      link: "https://kristar1.github.io/my-websites/",
      github: "https://github.com/Kristar1/my-websites",
      img: "https://myportfolio-krish.vercel.app/assets/p1.jpg",
      stack: ["akar-icons:html-fill", "cib:css3-shiled", "cib:javascript"],
    },
    {
      title: "Party Vendor Directory",
      desc: " This is a vendor directory that I built for a startup, it`s made in Next.js, Bootstrap, Node.js, Express.js, and MongoDB. We had to scrape the data from google maps to get the data of the vendors and store it in our database. I built different API for different functions like getting vendors from a particular city or particular category and there is also an inquiry form.",
      link: "https://zelebrate.in/vendors",
      video: "https://www.youtube.com/embed/tssRZ299YG0",
      stack: ["akar-icons:html-fill", "cib:css3-shiled", "cib:javascript"],
    },
    {
      title: "Consulting Agency Website",
      desc: "I did the entire frontend development of the website based on the design provided by the client. The website provides details about there services , founder, has caseStudies and latest thinking",
      link: "https://eclientcare-ui-next.vercel.app/",
      img: "assets/consulting.jpeg",
      stack: ["logos:nextjs-icon", "cib:css3-shiled", "simple-icons:chakraui"],
    },
    {
      title: "Flyer Editor Page for Zelebrate ",
      desc: "I built a flyer editor page for a startup, it has various features like changing the text , adjusting the font color, size, design, font weight etc and then download the flyer and share it on social media .",
      link: "https://zelebrate.in/online-invitations",
      video: "https://www.youtube.com/embed/x_9_fPL4AB8",
      stack: [
        "logos:nextjs-icon",
        "cib:css3-shiled",
        "akar-icons:bootstrap-fill",
      ],
    },
  ];
  // <iframe width="1044" height="481" src="https://www.youtube.com/embed/tssRZ299YG0" title="My Party Vendor Directory Project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  return (
    <Box minH="100vh" mt='140px' >
      <div className=" specialSection projects" id="projects">
        <Heading textAlign="center" as="h2" fontSize="4xl">
          Some Things I’ve Built
        </Heading>
        <div className="p">
          {projects.map((project) => (
            <div className="pWrapper" key={project.title} >
              <div className="projectWrapper">
                <Box
                  className="projectDesc"
                  _dark={{ boxShadow: "rgb(255 255 255 / 30%) -8px 13px 10px" }}
                >
                  <Heading as="h3" fontSize="2xl">
                    {project.title}
                  </Heading>
                  <Text fontSize="lg">{project.desc}</Text>
                  <div className="more">
                    <Box className="links" display='flex' >
                      <div className="wrap">
                      <b>
                        <a className='animatedButton'  target="_blank" rel="noreferrer" href={project.link}  >
                          Live Demo
                        </a>
                      </b>
                      </div>

                      {project.github && (
                        <b>
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener"
                            display={'flex'}
                            padding='0'
                          >
                            <BsGithub/>
                          </Link>
                        </b>
                      )}
                    </Box>
                    <div className="language">
                      {project?.stack?.map((lang) => (
                        <Icon className="smallIcon" key={lang} icon={lang} />
                      ))}
                    </div>
                  </div>
                </Box>
                <div className="projectImage">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.video ? (
                      <iframe
                      className="yt-video"
                        // width="600px"
                        // height="400px"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                        src={project.video}
                      ></iframe>
                    ) : (
                      <Image src={project.img} alt={project.title} />
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Projects;
