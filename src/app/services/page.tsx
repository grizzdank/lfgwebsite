import { Metadata } from "next";
import { siteMetadata } from "@/config/metadata";
import ServicesPageClientContent from "@/components/page/ServicesPageClientContent";

export const metadata: Metadata = {
  title: "Our Services | LFG Consulting",
  description:
    "Expert consulting services in organizational change management, AI workflow design & integration, and rapid MVP development. Transform your organization with LFG Consulting.",
  openGraph: {
    ...siteMetadata.openGraph,
    title: "Our Services | LFG Consulting",
    description:
      "Expert consulting services in organizational change management, AI workflow design & integration, and rapid MVP development.",
    url: "/services",
  },
  twitter: {
    ...siteMetadata.twitter,
    title: "Our Services | LFG Consulting",
    description:
      "Expert consulting services in organizational change management, AI workflow design & integration, and rapid MVP development.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClientContent />;
}
