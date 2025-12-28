/**
 * Types comuns compartilhados
 */
export type Status = "idle" | "loading" | "success" | "error";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface Toast {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  duration?: number;
}
