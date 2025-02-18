type DataItem = {
  name: string;
} & {
  [key: string]: number | string;
} & Omit<{ name: string }, "name">;
