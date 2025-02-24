import classNames from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

import s from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(s.ProfileCard, {}, [className])}>
            <div className={s.header}>
                <Text title="Профиль" />
                <Button className={s.editBtn} theme={ThemeButton.OUTLINE}>
                    Редактировать
                </Button>
            </div>
            <div className={s.data}>
                <Input
                    className={s.input}
                    value={data?.first}
                    placeholder="Ваше имя"
                />
                <Input
                    className={s.input}
                    value={data?.lastname}
                    placeholder="Ваша фамилия"
                />
            </div>
        </div>
    );
};
