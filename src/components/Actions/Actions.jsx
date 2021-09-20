import { memo } from 'react';
import ShareIcon from '../../images/share.svg';
import CopyIcon from '../../images/copy.svg';

import * as S from './styled';

const navigationHasShare = navigator.share;

const URL = 'http://localhost:3001/';

const Actions = ({ post, subject }) => {
    const { id, title } = post;
    const shareInfo = () => {
        navigator.share({
            title: `PWA News - ${subject}`,
            text: title,
            url: URL,
        });
    };

    const copyInfo =() => {
        navigator.clipboard.writeText(`${title} - *Learn about more in * ${URL}/${subject}/${id}`)
    };

    const renderActions = () => {
        const action = navigationHasShare ? shareInfo : copyInfo;
        const icon = navigationHasShare ? ShareIcon : CopyIcon;

        return (
            <S.ShareIcon src={icon} alt='icon' onClick={action}/>
        )
    }

    return (
        <S.Share>
            {renderActions()}
        </S.Share>
    )
}

export default memo(Actions)
