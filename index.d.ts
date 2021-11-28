export interface wcsOptions {
  nul?: number;
  control?: number;
}

declare function wcswidth(str: string, opts?: wcsOptions): number;

export = wcswidth;
