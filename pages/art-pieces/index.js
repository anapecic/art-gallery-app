import ArtPiecePreview from "@/components/ArtPiecePreview/ArtPiecePreview";

export default function ArtPiecesPage({ pieces }) {
  return (
    <div>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </div>
  );
}
