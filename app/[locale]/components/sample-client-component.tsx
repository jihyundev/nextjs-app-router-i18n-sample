import {useTranslations} from 'next-intl';

export const SampleClientComponent = () => {
    const t = useTranslations('blog')
    return (
        <div className="my-10">
            <p>
                {t('message', {name: 'Jane'})}
            </p>
            <p>
                {t('appDir.answer')}
            </p>
        </div>
    )
}