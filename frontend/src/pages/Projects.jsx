import cpuImg from "../assets/images/cpu.jpg";
import fullstackImg from "../assets/images/fullstack.jpg";
import linuxImg from "../assets/images/linux.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      desc: "A full-stack productivity app deployed on Azure. Built with Spring Boot, React, PostgreSQL, and Docker.",
      link: "https://github.com/awsafIbrahim/Full_Stack_TaskManager",
      img: fullstackImg,
    },
    {
      title: "Unix Shell Simulator",
      desc: "Developed a custom Unix shell supporting essential shell functionalities such as command execution and process management",
      link: "https://github.com/awsafIbrahim/MyShell",
      img: linuxImg,
    },
    {
      title: "CPU Scheduler Simulator",
      desc: "A C-based simulator implementing Round Robin, Priority Scheduling, and SJF algorithms.",
      link: "https://github.com/awsafIbrahim/cpu_scheduler-",
      img: cpuImg,
    },
  ];

 //Processing the projects 
  let projectCards = [];
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];

    projectCards.push(
      <a
        key={i}
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-dark"
      >
        <div className="card shadow-sm p-3">
          <div className="row g-3 align-items-center">

            {/*puttin the image on left*/}
            <div className="col-md-3">
              <img
                src={p.img}
                alt={p.title}
                className="img-fluid rounded"
                style={{ width: "100%", height: "160px", objectFit: "cover" }}
              />
            </div>

            {/* Aligning the text right*/}
            <div className="col-md-9">
              <h4 className="fw-semibold">{p.title}</h4>
              <p className="mb-0">{p.desc}</p>
            </div>

          </div>
        </div>
      </a>
    );
  }

  //REturning the Card
  return (
    <section className="container my-5">
      <h2 className="fw-bold mb-4">Projects</h2>

      <div className="d-flex flex-column gap-4">
        {projectCards}
      </div>
    </section>
  );
}
