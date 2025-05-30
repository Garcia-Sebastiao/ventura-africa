import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn("w-full mx-auto max-w-[90rem] px-4 lg:px-16", className)}
    >
      {children}
    </div>
  );
}
