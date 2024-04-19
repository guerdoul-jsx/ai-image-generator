import { ITSize } from "@/types";

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const sizes: ITSize[] = [
  {
    id: 1,
    name: "1:1",
    width: 768,
    height: 768,
  },
  {
    id: 2,
    name: "1:2",
    width: 544,
    height: 1088,
  },
  {
    id: 3,
    name: "2:3",
    width: 632,
    height: 944,
  },
  {
    id: 4,
    name: "3:2",
    width: 944,
    height: 624,
  },
  {
    id: 5,
    name: "3:4",
    width: 664,
    height: 880,
  },
  {
    id: 6,
    name: "4:3",
    width: 880,
    height: 856,
  },
  {
    id: 7,
    name: "9:16",
    width: 568,
    height: 1008,
  },
  {
    id: 8,
    name: "9:16",
    width: 1008,
    height: 568,
  },
];
