import { useQuery } from "@tanstack/react-query";

interface DashboardData {
  totalUsers: number;
  totalAppointments: number;
  activePatients: number;
}

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard", "stats"],
    queryFn: async (): Promise<DashboardData> => {
      // Aqui você faria a chamada real para a API
      return {
        totalUsers: 150,
        totalAppointments: 45,
        activePatients: 120,
      };
    },
  });
}
