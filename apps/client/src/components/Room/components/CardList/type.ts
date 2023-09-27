export type CardListType = {
  selectedCount: number | string | null;
  onCardClick: (type: string | number) => () => void;
  onEmojiSelect: (emoji: Record<string, string | string[]>) => void;
};
