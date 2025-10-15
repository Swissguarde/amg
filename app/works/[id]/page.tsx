import ProjectDetail from "@/app/components/project-detail";
import { getProjectById } from "@/lib/projects";

interface WorkDetailPageProps {
  params: {
    id: string;
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    return (
      <div className="py-16 text-center md:py-32">
        <h1 className="text-2xl text-gray-700 md:text-4xl">
          Project not found
        </h1>
        <p className="mt-4 text-gray-500">
          The project you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return <ProjectDetail project={project} />;
}
