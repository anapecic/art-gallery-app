import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to Load.</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}