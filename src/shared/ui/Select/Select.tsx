import classNames from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import s from "./Select.module.scss";

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label: string;
    options?: SelectOptions[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = memo(
    ({ className, label, options, value, readonly, onChange }: SelectProps) => {
        const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            onChange?.(e.target.value);
        };

        const optionsList = useMemo(() => {
            return options?.map((opt) => (
                <option className={s.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            ));
        }, [options]);

        return (
            <div className={classNames(s.Wrapper, {}, [className])}>
                {label && <span className={s.label}>{`${label}>`}</span>}
                <select
                    className={s.select}
                    value={value}
                    onChange={onChangeHandler}
                    disabled={readonly}
                >
                    {optionsList}
                </select>
            </div>
        );
    },
);
