// import Link from 'next/link'
import { Link } from "@/navigation";
import {useTranslations} from 'next-intl';

export const NextButon = ({ target }: {
    target: 'second' | 'third'
}) => {
    const t = useTranslations('button')

    return (
        <>
        <Link href={`/${target || 'second'}-page`}>
            <button className="border p-2 rounded">{t("next")}</button>
        </Link>
        </>
    )
}