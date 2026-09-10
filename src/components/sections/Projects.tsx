import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-12">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-24">
        <div className="flex flex-col gap-2.5">
          <h2 className="font-['Montserrat'] text-6xl font-medium text-black">PROJECT</h2>
        </div>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
       href={`/work/${project.slug}`}
      className="group flex flex-col gap-3"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
      {project.coverImage && (
        <div className=" overflow-hidden rounded-[10px] shadow-lg">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 522px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        </div>
      )}
    </div>

      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-['Montserrat'] text-2xl font-medium text-black">
            {project.title}
          </h3>
          <span className="font-['Montserrat'] text-sm font-base text-black">
            {project.year}
          </span>
        </div>

        <p className="font-['Montserrat'] text-right text-base font-normal text-black">
          {project.category}
        </p>
      </div>
    </a>
  );
}