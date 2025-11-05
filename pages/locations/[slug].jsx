import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";

const LOCATIONS_DIR = path.join(process.cwd(), "content", "locations");

// Utility: get all slugs from content/locations/*.mdx
function getLocationSlugs() {
  if (!fs.existsSync(LOCATIONS_DIR)) return [];
  return fs
    .readdirSync(LOCATIONS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getStaticPaths() {
  const slugs = getLocationSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // all locations must exist at build time
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const filePath = path.join(LOCATIONS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const rawContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(rawContent);

  const mdxSource = await serialize(content, {
    scope: data || {},
  });

  // Clean title fallback (e.g. "surry-hills" -> "Surry Hills")
  const formattedSlug =
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) || "Location";

  return {
    props: {
      slug,
      mdxSource,
      frontmatter: {
        title: data.title || `${formattedSlug} Heritage Restoration`,
        intro:
          data.intro ||
          `Expert heritage roof and facade restoration services in ${formattedSlug}.`,
        heroImage:
          data.heroImage || "/images/service-hero-placeholder.jpg",
      },
    },
  };
}

export default function LocationPage({ slug, mdxSource, frontmatter }) {
  const { title, intro, heroImage } = frontmatter;

  return (
    <>
      <Head>
        <title>{title} | Heritage Restorations Sydney</title>
        <meta name="description" content={intro} />
      </Head>

      <main className="bg-heritage-cream min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold tracking-wide text-forest-green mb-2 uppercase">
                  {slug.replace(/-/g, " ")}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                  {title}
                </h1>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  {intro}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-forest-green px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
                  >
                    Request an Inspection
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-md border border-forest-green px-5 py-2.5 text-sm font-semibold text-forest-green hover:bg-heritage-cream"
                  >
                    View Heritage Services
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

        {/* Content */}
        <section className="max-w-3xl mx-auto px-4 pb-16 md:pb-20">
          <article className="prose prose-lg max-w-none prose-headings:text-charcoal prose-a:text-forest-green">
            <MDXRemote {...mdxSource} />
          </article>

          <div className="mt-10 border-t border-gray-200 pt-6 flex justify-between items-center text-sm text-gray-600">
            <Link href="/locations" className="hover:text-forest-green">
              ← Back to all locations
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
