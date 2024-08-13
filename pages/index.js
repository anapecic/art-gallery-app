import ArtPieces from "./ArtPieces";
import SpotLight from "@/components/Spotlight/SpotLight";

export default function HomePage({ pieces, handleToggleFavorite }) {
  return (
    <div>
      <SpotLight pieces={pieces} />
      <ArtPieces pieces={pieces} handleToggleFavorite={handleToggleFavorite} />
    </div>
  );
}
