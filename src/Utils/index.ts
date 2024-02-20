export const cx = (...classNames: (string | undefined | null)[]) =>
  classNames.filter(Boolean).join(" ");
