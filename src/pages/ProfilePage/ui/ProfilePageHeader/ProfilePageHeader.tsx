import clsx from "clsx";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useCallback } from "react";

import s from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={clsx(s.ProfilePageHeader, className)}>
            <Text title="Профиль" />
            {readonly ? (
                <Button
                    className={s.editBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={onEdit}
                >
                    Редактировать
                </Button>
            ) : (
                <>
                    <Button
                        className={s.editBtn}
                        theme={ThemeButton.OUTLINE}
                        onClick={onCancelEdit}
                    >
                        Отменить
                    </Button>
                    <Button theme={ThemeButton.OUTLINE} onClick={onSaveEdit}>
                        Сохранить
                    </Button>
                </>
            )}
        </div>
    );
};
