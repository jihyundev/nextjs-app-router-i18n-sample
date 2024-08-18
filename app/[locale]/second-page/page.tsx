import {useTranslations} from 'next-intl';
import { BackButon } from '../components/back-button';
import { NextButon } from '../components/next-button';

export default function SecondPage() {
    const t = useTranslations('page-title')
    return (
        <>
        <p>{t("second")}</p>
        <NextButon target='third' />
        <BackButon />
        </>
    )
}