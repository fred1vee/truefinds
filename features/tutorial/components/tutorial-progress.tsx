type TutorialProgressProps = {
  completed: number;
  label: string;
  total: number;
};

export function TutorialProgress({
  completed,
  label,
  total,
}: TutorialProgressProps) {
  const safeTotal = Math.max(total, 1);
  const safeCompleted = Math.min(Math.max(completed, 0), total);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-xs">
        <span className="font-medium text-zinc-400">{label}</span>
        <span className="text-zinc-600">
          {safeCompleted}/{total}
        </span>
      </div>
      <progress
        aria-label={label}
        value={safeCompleted}
        max={safeTotal}
        className="block h-2 w-full overflow-hidden rounded-full bg-white/[0.06] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-primary [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-white/[0.06] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-primary"
      />
    </div>
  );
}
