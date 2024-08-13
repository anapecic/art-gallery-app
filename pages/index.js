import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { randomSpotLight } from "@/components/Sportlight/SpotLight";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data: pieces, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to Load.</div>;
  if (isLoading) return <div>loading...</div>;

  const randomPiece = randomSpotLight(pieces);

  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
