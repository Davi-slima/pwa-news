import { memo } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { createMarkup } from '../../../commons/utils/Utils';
import { useHistory } from 'react-router-dom';

const Technology = ({ values }) => {
    const history = useHistory();

    const renderImg = ({ image, description }) => {
        return (
            <div>
                <img src={image.url} alt={description} width='100%' />
            </div>
        )
    }

    const openPost = (id) =>
        history.push(`technology/${id}`)

    const renderPost = (post, index) => {
        const { title, image, description, id } = post
        return (
            <Col span={12} md={6} key={`technology-${index}`}>
                <article onClick={() => openPost(id)}>
                    <p>
                        <strong dangerouslySetInnerHTML={createMarkup(title)} />
                    </p>
                    <p dangerouslySetInnerHTML={createMarkup(description)} />
                    {image.url && renderImg({ image, description })}
                </article>
            </Col>
        );
    };

    return (
        <Row gutter={[16, 16]}>
            {values.map(renderPost)}
        </Row>
    );
};

Technology.defaultProps = {
    values: [],
};

Technology.prototypes = {
    values: PropTypes.array.isRequired,
};

export default memo(Technology);
