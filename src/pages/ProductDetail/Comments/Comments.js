import classNames from 'classnames/bind';
import styles from './Comments.module.scss';
import RatingStar from '~/components/RatingStar';
import images from '~/assets/images';
import Pagination from '~/components/Pagination';

const cx = classNames.bind(styles);

function Comments() {
    const data = [
        {
            avatar: images.background_slide,
            name: 'Ha Dy Ne',
            time: 'June 28, 2024',
            rating: 3.6,
            text: 'Thật tuyệt vời',
        },
        {
            avatar: images.background_slide,
            name: 'Ha Dy Ne',
            time: 'June 28, 2024',
            rating: 3.6,
            text: 'Thật tuyệt vời',
        },
        {
            avatar: images.background_slide,
            name: 'Ha Dy Ne',
            time: 'June 28, 2024',
            rating: 3.6,
            text: 'Thật tuyệt vời',
        },
        {
            avatar: images.background_slide,
            name: 'Ha Dy Ne',
            time: 'June 28, 2024',
            rating: 3.6,
            text: 'Thật tuyệt vời',
        },
        {
            avatar: images.background_slide,
            name: 'Ha Dy Ne',
            time: 'June 28, 2024',
            rating: 3.6,
            text: 'Thật tuyệt vời',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h2>Bình luận</h2>
            <ul className={cx('list-comment')}>
                <Pagination data={data} limit={5}>
                    {({ item, index }) => (
                        <li className={cx('item-comment')} key={index}>
                            <img src={item.avatar} alt="Avatar" />
                            <div className={cx('content-comment')}>
                                <h4>
                                    {item.name} <span>- {item.time}</span>
                                </h4>
                                <RatingStar rating={item.rating} />
                                <p>{item.text}</p>
                            </div>
                        </li>
                    )}
                </Pagination>
            </ul>
        </div>
    );
}

export default Comments;
