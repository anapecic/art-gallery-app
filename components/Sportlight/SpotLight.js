import Image from "next/image";
import { uid } from "uid";
import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export function randomSpotLight() {
  if (!pieces || pieces.lenght === 0) return null;
  const randomIndex = math.floor(math.random() * pieces.lenght);
  return pieces[randomIndex];
}
{
  /* <div>
  <h1>Spotlight</h1>
  <ArtPiecePreview />
</div>; */
}
