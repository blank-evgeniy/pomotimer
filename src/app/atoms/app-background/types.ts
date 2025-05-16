export const BackgroundVariant = {
  RELAXING: "bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500",
  WORKING: "bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500",
} as const;

export type BackgroundVariant =
  (typeof BackgroundVariant)[keyof typeof BackgroundVariant];
