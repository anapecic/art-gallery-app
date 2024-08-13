import Navigation from "../Navigation/Navigation";
import ArtPiecesPage from "@/pages/art-pieces";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
