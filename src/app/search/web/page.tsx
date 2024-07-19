import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const resposnse = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!resposnse.ok) throw Error("Something went wrong");
  const data = await resposnse.json();
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      {results && results.map((result: any) => <h1>{result.title}</h1>)}
    </div>
  );
}
