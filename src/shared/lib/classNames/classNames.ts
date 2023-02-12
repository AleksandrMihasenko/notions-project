type Mods = Record<string, boolean | string>;

export function classNames(className: string, additional: string[] = [], mods: Mods = {} ): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([ _, value ]) => Boolean(value))
      .map(([ cls ]) => cls)
  ]
    .join(' ');
}
