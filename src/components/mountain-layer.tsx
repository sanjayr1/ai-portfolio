interface MountainLayerProps {
  className?: string;
}

export function MountainLayer({ className = "" }: MountainLayerProps) {
  return (
    <div
      className={`pointer-events-none absolute bottom-0 -left-[10%] w-[120%] select-none ${className}`}
    >
      <img src="/images/mtns.png" alt="" className="h-auto w-full object-cover" draggable={false} />
    </div>
  );
}
