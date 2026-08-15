export type Tab = "add" | "sales" | "stock" | "report";
export type Filter = "all" | "in" | "low" | "out";
export type ExportKind = "sales" | "inventory";
export type ExportRange = "month" | "quarter" | "year";

export interface Item {
  id: number;
  name: string;
  variant?: string;
  qty: number;
  cost: number;
  sell: number;
}

export interface DayEntry {
  day: string;
  sales: number;
  profit: number;
}

export interface LogEntry {
  id: string;
  name: string;
  sub: string;
  amt: number;
  profit: number;
  kind: "sale" | "expense";
}

export interface Currency {
  sym: string;
  code: string;
  locale: string;
  spaced?: boolean;
}

export interface AddForm {
  name: string;
  qty: string;
  cost: string;
  sell: string;
  tax: string;
}
