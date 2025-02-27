import classNames from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import s from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({
    className,
    comments,
    isLoading,
}: CommentListProps) => {
    if (isLoading) {
        return (
            <div className={classNames(s.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(s.CommentList, {}, [className])}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        className={s.comment}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Text text="Комментарии отсутствуют" />
            )}
        </div>
    );
};
