import classNames from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import s from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        if (isLoading) {
            return (
                <div className={classNames(s.CommentCard, {}, [className])}>
                    <div className={s.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton className={s.text} width="100%" height={50} />
                </div>
            );
        }

        return (
            <div className={classNames(s.CommentCard, {}, [className])}>
                <div className={s.header}>
                    {comment.user.avatar && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text title={comment.user.username} />
                </div>
                <Text className={s.text} text={comment.text} />
            </div>
        );
    },
);
