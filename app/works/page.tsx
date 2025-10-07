import Image from "next/image";
import PageSectionNav from "../components/navigation/page-section-nav";
import Link from "next/link";

export default function WorksPage() {
  return (
    <div className="px-8 py-20">
      <PageSectionNav />

      <div className="mt-20">
        <div className="grid w-full grid-cols-2 items-center justify-center gap-x-3 gap-y-10">
          {projects.map((project, i) => (
            <Link href={project.href} key={i} className="flex-1">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={project.bg}
                  alt="Work 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[600px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="mt-3 flex flex-col gap-1">
                <h2 className="text-xl">{project.title}</h2>
                <div className="flex items-center gap-3 text-base text-gray-500">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <p key={tag}>{tag}</p>
                      {i !== project.tags.length - 1 && (
                        <span className="text-2xl text-gray-300">•</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
const projects = [
  {
    title: "The Ayo Lawal Empowering Foundation",
    tags: ["Branding", "UX/UI Design", "Social Media"],
    bg: "/lawal.png",
    href: "/works/123",
  },
  {
    title: "I Think You Should Listen To This",
    tags: ["Branding", "UX/UI Design"],
    bg: "/itysltt.png",
    href: "/works/i-think-you-should-listen-to-this",
  },
  {
    title: "Ayo Lawal: Empowering Brands",
    tags: ["Branding", "UX/UI Design", "Web Development"],
    bg: "/lawal.png",
    href: "/works/lawal",
  },
  {
    title: "Ayo Lawal: Empowering Brands",
    tags: ["Branding", "UX/UI Design", "Web Development"],
    bg: "/lawal.png",
    href: "/works/lawal",
  },
];
