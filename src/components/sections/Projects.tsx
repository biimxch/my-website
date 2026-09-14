import Image from "next/image";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-12">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-2">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl sm:text-5xl font-medium font-['Montserrat'] text-black">
            work.
          </h2>

          <button
            type="button"
            className="bg-[#f1f1f1] px-8 py-5 text-base font-medium font-['Montserrat'] text-black transition-opacity hover:opacity-70"
          >
            Show More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
      className="group relative flex aspect-[4/3] w-full overflow-hidden bg-zinc-100 shadow-lg"
    >
      {/* รูปภาพ */}
      {project.coverImage && (
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 522px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
        />
      )}

      {/* Gradient Overlay (จะค่อยๆ ปรากฏขึ้นเมื่อ Hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100" />

      {/* ส่วนของตัวหนังสือ (จะค่อยๆ ปรากฏขึ้นเมื่อ Hover และเปลี่ยนสีเป็นสีขาว) */}
      <div className="absolute inset-x-0 bottom-0 flex w-full items-end justify-between gap-4 p-6 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 z-10">
        <div className="flex flex-col gap-1">
          <h3 className="font-['Montserrat'] text-2xl font-medium text-white">
            {project.title}
          </h3>
          <span className="font-['Montserrat'] text-sm font-base text-gray-200">
            {project.year}
          </span>
        </div>

        <p className="font-['Montserrat'] text-right text-base font-normal text-gray-200">
          {project.category}
        </p>
      </div>
    </a>
  );
}