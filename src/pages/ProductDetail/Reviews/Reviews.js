import classNames from 'classnames/bind';
import styles from './Reviews.module.scss';
import RatingStar from '~/components/RatingStar';
import Pagination from '~/components/Pagination';
import { useContext, useEffect, useState } from 'react';
import { ReviewContext } from '~/context/ReviewContext';
import moment from 'moment';

const cx = classNames.bind(styles);

function Reviews({ productId }) {
    const [reviews, setReviews] = useState([]);

    const { getReviewsByProductId } = useContext(ReviewContext);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviewsByProductId(productId);
            setReviews(reviews);
        };

        if (productId) {
            fetchReviews();
        }
    }, [productId, getReviewsByProductId]);

    return (
        <div className={cx('wrapper')}>
            <h2>Đánh giá</h2>
            <ul className={cx('list-comment')}>
                {reviews && (
                    <Pagination data={reviews?.items} limit={5}>
                        {({ item, index }) => (
                            <li className={cx('item-comment')} key={index}>
                                <img src={item?.userId.avatar} alt="Avatar" />
                                <div className={cx('content-comment')}>
                                    <h4>
                                        {item?.userId.fullname} <span>- {moment(item?.createdAt).calendar()}</span>
                                    </h4>
                                    <RatingStar rating={item?.rating} />
                                    <p>{item?.comment}</p>
                                </div>
                            </li>
                        )}
                    </Pagination>
                )}
                {!reviews?.items?.length && <li>Chưa có đánh giá nào</li>}
            </ul>
        </div>
    );
}

export default Reviews;
