import ArtPiecesPage from "./art-pieces";
import Spotlight from "./spotlight";

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
