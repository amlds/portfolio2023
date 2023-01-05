import HoverLink from "./HoverLink";

export default function Header() {
  return (
    <header>
        <HoverLink infos={
          {
            name: "À propos",
            font: ["1.5rem", "Satoshi"]
          }
        }/>
        <HoverLink infos={
          {
            name: "Projets",
            font: ["1.5rem", "Satoshi"]
          }
        }/>
        <HoverLink infos={
          {
            name: "Contact",
            font: ["1.5rem", "Satoshi"]
          }
        }/>
    </header>
  );
}
