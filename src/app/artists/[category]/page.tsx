import Link from "next/link";
import { artists, categories } from "@/data/mockData";
import ArtistCard from "@/components/ArtistCard";
import Footer from "@/components/Footer";

interface ArtistsPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function ArtistsPage({ params }: ArtistsPageProps) {
  const { category } = await params;
  const categoryData = categories.find((c) => c.id === category);
  const categoryArtists = artists.filter((a) => a.category === category);

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Category not found
          </h1>
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-700 mt-4 inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-serif">
          {categoryData.name} Artists
        </h1>
        <p className="text-gray-600 mb-8">
          Choose from our talented {categoryData.name.toLowerCase()} specialists
        </p>

        {categoryArtists.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No artists found in this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
