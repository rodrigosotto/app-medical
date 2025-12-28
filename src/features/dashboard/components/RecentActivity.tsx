interface Activity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities?: Activity[];
}

export function RecentActivity({ activities = [] }: RecentActivityProps) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>Atividades Recentes</h3>
      {activities.length === 0 ? (
        <p>Nenhuma atividade recente</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {activities.map((activity) => (
            <li
              key={activity.id}
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <h4 style={{ margin: "0 0 4px 0" }}>{activity.title}</h4>
              <p
                style={{ margin: "0 0 4px 0", color: "#666", fontSize: "14px" }}
              >
                {activity.description}
              </p>
              <span style={{ fontSize: "12px", color: "#999" }}>
                {activity.timestamp}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
