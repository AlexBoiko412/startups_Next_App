import {DateTime} from "@auth/core/providers/kakao";

export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "short",
        year: "numeric",

    })
}