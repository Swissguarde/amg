import Image from "next/image";
import PageSectionNav from "../components/navigation/page-section-nav";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProjects } from "@/lib/projects";

export default function WorksPage() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-20">
      <Tabs defaultValue="uxui" className="w-full">
        <TabsList className="mb-10 grid h-24 w-full grid-cols-2 gap-3 border border-[#B9BDAB] md:grid-cols-4">
          <TabsTrigger value="brand">Brand Design</TabsTrigger>
          <TabsTrigger value="uxui">UX/UI Design</TabsTrigger>
          <TabsTrigger value="webapp">Web & App Development</TabsTrigger>
          <TabsTrigger value="social">Social Media Management</TabsTrigger>
        </TabsList>

        <TabsContent value="uxui">
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Interfaces that feel effortless and look stunning. We design
            intuitive flows and pixel-perfect UI.
          </p>
          <ServiceProjectsGrid serviceKey="uxui" />
        </TabsContent>

        <TabsContent value="brand">
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Cohesive brand systems that communicate clearly and stand out across
            every touchpoint.
          </p>
          <ServiceProjectsGrid serviceKey="brand" />
        </TabsContent>

        <TabsContent value="webapp">
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            High-performing web and mobile experiences engineered for speed,
            accessibility, and scale.
          </p>
          <ServiceProjectsGrid serviceKey="webapp" />
        </TabsContent>

        <TabsContent value="social">
          <p className="mt-4 text-sm text-gray-600 md:text-base">
            Strategy-led content and community building to grow your brand and
            engagement.
          </p>
          <ServiceProjectsGrid serviceKey="social" />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ServiceProjectsGrid({
  serviceKey,
}: {
  serviceKey: "uxui" | "brand" | "webapp" | "social";
}) {
  const projects = getAllProjects().map((p) => ({
    title: p.title,
    tags: p.services,
    tabIds: p.tabIds,
    bg: p.heroImage?.src || "/test.jpg",
    href: `/works/${p.id}`,
  }));

  const filtered = projects.filter((project) =>
    project.tabIds?.includes(serviceKey),
  );

  return (
    <div className="mt-10 md:mt-20">
      <div className="grid w-full grid-cols-1 items-center justify-center gap-x-3 gap-y-8 md:grid-cols-2 md:gap-y-10">
        {filtered.map((project, i) => (
          <Link href={project.href} key={i} className="flex-1">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={project.bg}
                alt={project.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[300px] w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 md:h-[600px]"
              />
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <h2 className="text-lg md:text-xl">{project.title}</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 md:gap-3 md:text-base">
                {project.tags.map((tag, j) => (
                  <div key={j} className="flex items-center gap-2 md:gap-3">
                    <p>{tag}</p>
                    {j !== project.tags.length - 1 && (
                      <span className="text-xl text-gray-300 md:text-2xl">
                        •
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-gray-500">
          No projects to show here yet.
        </p>
      )}
    </div>
  );
}
