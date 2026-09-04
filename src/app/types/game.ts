export type GameStatus =
  | "backlog"
  | "playing"
  | "paused"
  | "completed"
  | "abandoned";

export type GamePriority = "low" | "medium" | "high";

export interface Game {
  id: string;
  title: string;
  steamAppId: number;
  status: GameStatus;
  playtimeHours: number;
  estimatedHours: number;
  genre: string;
  priority: GamePriority;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
