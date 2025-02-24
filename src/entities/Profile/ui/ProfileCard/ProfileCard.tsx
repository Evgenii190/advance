import classNames from "shared/lib/classNames/classNames";
import { Text, TextAling, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";
import { Avatar } from "shared/ui/Avatar/Avatar";
import s from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
}: ProfileCardProps) => {
    if (isLoading) {
        return (
            <div
                className={classNames(s.ProfileCard, {}, [
                    className,
                    s.loading,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(s.ProfileCard, {}, [className, s.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    aling={TextAling.CENTER}
                    title="Произошла ошибка"
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(s.ProfileCard, { [s.editing]: !readonly }, [
                className,
            ])}
        >
            <div className={s.data}>
                {data?.avatar && (
                    <div className={s.avatar__wrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt="Аватар"
                            className={s.avatar}
                        />
                    </div>
                )}

                <Input
                    className={s.input}
                    value={data?.first}
                    placeholder="Ваше имя"
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    className={s.input}
                    value={data?.lastname}
                    placeholder="Ваша фамилия"
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    className={s.input}
                    value={data?.age}
                    placeholder="Возраст"
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    className={s.input}
                    value={data?.city}
                    placeholder="Город"
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    className={s.input}
                    value={data?.username}
                    placeholder="Имя пользователя"
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    className={s.input}
                    value={data?.avatar}
                    placeholder="Аватар"
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={s.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={s.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
