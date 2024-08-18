import {useTranslations} from 'next-intl';

export const SampleClientComponent = () => {
    const t = useTranslations('blog')
    return (
        <>
            <p className="mb-10 text-xl text-center">
                {t('appDir.answer')}
            </p>
            <p>
                {t('message', {name: 'Jane'})}
            </p>
        </>
    )
}