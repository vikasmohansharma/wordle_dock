import { Coffee } from "lucide-react";
import Button from "../ui/Button";

interface HeaderProps {
  onNewGame: () => void;
}

const Header = ({ onNewGame }: HeaderProps) => {
  return (
    <header className="py-3 px-6 flex justify-between items-center border-b border-zinc-800">
      <h1 className="text-lg font-semibold">
        <span className="text-emerald-500">A</span>
        <span className="text-amber-500">B</span>
        <span className="text-zinc-400">C</span>
      </h1>
      <div className="flex items-center gap-2">
        <a
          title="Buy me a coffee"
          href="https://buymeacoffee.com/azlibdar"
          target="_blank"
          rel="noreferrer"
          className="p-2 aspect-square flex justify-center items-center no-underline rounded-md text-amber-400 bg-zinc-700"
        >
          <Coffee size={20} />
        </a>
        <Button onClick={onNewGame}>New Game</Button>
      </div>
    </header>
  );
};

export default Header;
