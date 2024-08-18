import { Link } from "@/navigation";
import {useTranslations} from 'next-intl';

export const HomeButton = () => {
    const t = useTranslations('button')
    return (
        <>
        <Link href="/">
            <button className="border p-2 rounded">{t("back-to-home")}</button>
        </Link>
        </>
    )
}