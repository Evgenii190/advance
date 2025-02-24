import classNames from "shared/lib/classNames/classNames";
import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import s from "./Input.module.scss";

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type,
        autoFocus,
        ...otherProps
    } = props;
    const [isFocussed, setIsFocused] = useState(false);
    const [caretPos, setCaretPos] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            const { value } = e.target;
            onChange(value);
            setCaretPos(value.length);
        }
    };

    const onBlur = () => setIsFocused(false);
    const onFocus = () => setIsFocused(true);
    const onSelect = (e: any) => {
        setCaretPos(e.target.selectionStart || 0);
    };

    useEffect(() => {
        console.log("Input mounted");
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(s.InputWrap, {}, [className])}>
            {placeholder && (
                <div className={s.placeholder}>
                    {placeholder}
                    {">"}
                </div>
            )}
            <div className={s.caretWrap}>
                <input
                    ref={ref}
                    className={s.input}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocussed && (
                    <span
                        className={s.caret}
                        style={{ left: `${9 * caretPos}px` }}
                    />
                )}
            </div>
        </div>
    );
});
