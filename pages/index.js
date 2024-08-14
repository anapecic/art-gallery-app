import Spotlight from "@/components/Spotlight/SpotLight";
import ArtPiecesPage from "./art-pieces";

export default function HomePage({ pieces, handleToggleFavorite }) {
  return (
    <div>
      <Spotlight pieces={pieces} />
      <ArtPiecesPage
        pieces={pieces}
        handleToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
