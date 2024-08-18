import {useTranslations} from 'next-intl';
import { BackButon } from '../components/back-button';
import { HomeButton } from '../components/home-button';

export default function ThirdPage() {
    const t = useTranslations('page-title')
    return (
        <>
        <p>{t("third")}</p>
        <BackButon />
        <HomeButton />
        </>
    )
}