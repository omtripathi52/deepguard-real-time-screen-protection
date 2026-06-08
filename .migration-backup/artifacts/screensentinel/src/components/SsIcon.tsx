import type { LucideIcon } from "lucide-react";

interface SsIconProps {
  Icon: LucideIcon;
  size?: number;
  containerSize?: number;
  color?: string;
  bg?: string;
  border?: string;
  radius?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export function SsIcon({
  Icon,
  size = 17,
  containerSize = 40,
  color = "var(--accent)",
  bg = "var(--accent-dim)",
  border = "1px solid var(--accent-border)",
  radius = 10,
  strokeWidth = 1.75,
  style,
}: SsIconProps) {
  return (
    <div
      className="ss-icon-wrap"
      style={{
        width: containerSize,
        height: containerSize,
        minWidth: containerSize,
        minHeight: containerSize,
        borderRadius: radius,
        background: bg,
        border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        flexShrink: 0,
        lineHeight: 0,
        ...style,
      }}
    >
      <Icon size={size} strokeWidth={strokeWidth} />
    </div>
  );
}
