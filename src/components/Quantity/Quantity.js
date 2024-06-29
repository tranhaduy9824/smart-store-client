import classNames from 'classnames/bind';
import styles from './Quantity.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Quantity({ quantityValue, setQuantityValue, className }) {
    const minusQuantity = () => {
        if (!quantityValue.trim && quantityValue > 1) {
            setQuantityValue(quantityValue - 1);
        } else {
            setQuantityValue(1);
        }
    };

    const plusQuantity = () => {
        if (!quantityValue.trim) {
            setQuantityValue(quantityValue + 1);
        } else {
            setQuantityValue(1);
        }
    };

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <span onClick={minusQuantity}>
                <FontAwesomeIcon icon={faMinus} />
            </span>
            <input type="number" value={quantityValue} onChange={(e) => setQuantityValue(e.target.value)} />
            <span onClick={plusQuantity}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
    );
}

export default Quantity;
