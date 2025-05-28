import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full mx-auto max-w-[90rem] px-4 lg:px-16", className)}>
      {children}
    </div>
  );
}
