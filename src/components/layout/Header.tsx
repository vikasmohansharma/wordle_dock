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
      <Button onClick={onNewGame}>New Game</Button>
    </header>
  );
};

export default Header;
