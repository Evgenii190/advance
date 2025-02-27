import classNames from "shared/lib/classNames/classNames";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import {
    DynamicModuleLoader,
    ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useCallback } from "react";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/addCommentFormSlice";
import {
    addCommentFormError,
    addCommentFormText,
} from "../../model/selectors/addCommentFormSelectors";
import s from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const dispatch = useAppDispatch();

    const text = useSelector(addCommentFormText);
    const error = useSelector(addCommentFormError);

    const onCommentChange = useCallback(
        (text: string) => {
            dispatch(addCommentFormActions.setText(text));
        },
        [dispatch],
    );

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentChange("");
    }, [text, onCommentChange, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(s.AddCommentForm, {}, [className])}>
                <Input
                    className={s.input}
                    placeholder="Введите текст комментария"
                    value={text}
                    onChange={onCommentChange}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onSendCommentHandler}
                >
                    Отправить
                </Button>
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
