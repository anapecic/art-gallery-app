import ArtPieces from "./ArtPieces";
import SpotLight from "@/components/Spotlight/SpotLight";

export default function HomePage({ pieces }) {
  return (
    <div>
      <SpotLight pieces={pieces} />
      <ArtPieces pieces={pieces} />
    </div>
  );
}
