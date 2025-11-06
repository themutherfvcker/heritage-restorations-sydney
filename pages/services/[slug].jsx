import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";

import CTAButton from "../../components/CTAButton";
import ServiceSection from "../../components/ServiceSection";
import ComparisonTable from "../../components/ComparisonTable";
import MaterialsTable from "../../components/MaterialsTable";
import ServiceHero from "../../components/ServiceHero";

const SERVICES_DIR = path.join(process.cwd(), "content", "services");

// Get all service slugs from content/services/*.mdx
function getServiceSlugs() {
  if (!fs.existsSync(SERVICES_DIR)) return [];
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getStaticPaths() {
  const slugs = getServiceSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // all services must exist at build time
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const filePath = path.join(SERVICES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);

  const mdxSource = await serialize(content, {
    scope: data || {},
  });

  const formattedSlug =
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Service";

  const title =
    data.title || `${formattedSlug} | Heritage Restorations Sydney`;

  const intro =
    data.intro ||
    `Specialist heritage ${formattedSlug.toLowerCase()} for Sydney terraces, cottages and character homes.`;

  const heroImage =
    data.heroImage || "/images/service-hero-placeholder.jpg";

  return {
    props: {
      slug,
      mdxSource,
      frontmatter: {
        ...data,
        title,
        intro,
        heroImage,
      },
    },
  };
}

export default function ServicePage({ slug, mdxSource, frontmatter }) {
  const { title, intro, heroImage } = frontmatter;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={intro} />
      </Head>

      <main className="bg-heritage-cream min-h-screen">
        {/* Top-level hero (you can remove this if you want hero entirely controlled via MDX ServiceHero) */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold tracking-wide text-forest-green mb-2 uppercase">
                  Heritage Service
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  {title}
                </h1>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  {intro}
                </p>

                <div className="flex flex-wrap gap-3">
                  <CTAButton href="/contact">
                    Request an inspection
                  </CTAButton>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-forest-green px-5 py-2.5 text-sm font-semibold text-forest-green hover:bg-heritage-cream"
                  >
                    View all services
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-sandstone border border-heritage-brown/10">
                  <img
                    src={heroImage}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MDX content */}
        <section className="max-w-3xl mx-auto px-4 pb-16 md:pb-20">
          <article className="prose prose-lg max-w-none prose-headings:text-charcoal prose-a:text-forest-green">
            <MDXRemote
              {...mdxSource}
              components={{
                CTAButton,
                ServiceSection,
                ComparisonTable,
                MaterialsTable,
                ServiceHero,
              }}
            />
          </article>

          <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between items-center text-sm text-gray-600">
            <Link href="/services" className="hover:text-forest-green">
              ← Back to all services
            </Link>
            <Link href="/contact" className="hover:text-forest-green">
              Book a heritage inspection →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
