'use client'

import { Link, useRouter } from "@/navigation";
import {useTranslations} from 'next-intl';

export const BackButon = () => {
    const t = useTranslations('button');
    const router = useRouter();
    const back = () => {
        router.back()
    }

    return (
        <>
            <button className="border p-2 rounded" onClick={back}>{t("back")}</button>
        </>
    )
}