import { Delete } from "lucide-react";
import { KeyInfo } from "../../../data";
import { cn } from "../../../lib/utils";

const keyVariants = {
  none: "bg-zinc-800 text-zinc-400",
  static: "bg-zinc-700 text-zinc-200",
  blue: "bg-blue-500 text-white",
  yellow: "bg-yellow-500 text-white",
  gray: "bg-zinc-600 text-zinc-100",
  green: "bg-emerald-600 text-white",
};

interface KeyProps {
  keyData: KeyInfo;
}

const Key = ({ keyData }: KeyProps) => {
  const isEnterKey = keyData.text === "enter";

  return (
    <button
      className={cn(
        "h-14 rounded-md overflow-hidden uppercase transition duration-200 select-none",
        isEnterKey ? "col-span-3 text-sm" : "text-lg"
      )}
    >
      <span className={cn("w-full h-full flex justify-center items-center", keyVariants[key.color] || keyVariants.none)}>
        {keyData.text === "backspace" ? <Delete size={22} strokeWidth={1.75} className="text-zinc-200" /> : keyData.text}
      </span>
    </button>
  );
};

export default Key;
