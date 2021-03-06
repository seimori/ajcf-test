export type EspaceId = "talk" | "learn" | "meet" | "enjoy";
export type TalkPoleId = "conferences" | "memoire" | "ddd";
export type LearnPoleId = "dev-perso" | "echange-linguistique";
export type MeetPoleId = "club-pro" | "rencontre-mensuelle";
export type EnjoyPoleId = "cfd" | "sports-sorties";
export type PoleId = TalkPoleId | LearnPoleId | MeetPoleId | EnjoyPoleId;
export interface PoleProps {
  className: string;
  to: string;
  id: PoleId;
  title: string;
  description: string;
}
