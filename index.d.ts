export interface wcsOptions {
  nul?: number;
  control?: number;
}

export default function wcswidth(str: string, opts?: wcsOptions): number;
