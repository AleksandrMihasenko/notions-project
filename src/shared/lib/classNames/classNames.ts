export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  className: string,
  additional: Array<string | undefined> = [],
  mods: Mods = {},
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ]
    .join(' ');
}
