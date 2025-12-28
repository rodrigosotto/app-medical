interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, icon, trend }: StatsCardProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{title}</p>
          <h3 style={{ fontSize: "28px", margin: "8px 0" }}>{value}</h3>
          {trend && (
            <span
              style={{
                color: trend.isPositive ? "#4caf50" : "#f44336",
                fontSize: "12px",
              }}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>
          )}
        </div>
        {icon && <div>{icon}</div>}
      </div>
    </div>
  );
}
