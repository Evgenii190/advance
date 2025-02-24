type Mods = Record<string, boolean | string | undefined>;

export default function classNames(
    cls: string,
    mods: Mods = {},
    additional: (string | undefined)[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => {
                return Boolean(value);
            })
            .map(([className]) => {
                return className;
            }),
    ].join(" ");
}
