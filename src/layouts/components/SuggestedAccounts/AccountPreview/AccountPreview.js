import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8712dd1203cec510929b14c9f4102d16~c5_100x100.webp?lk3s=a5d48078&nonce=6395&refresh_token=cd87d14affd95f7faefe38369b5db019&x-expires=1720929600&x-signature=KBV%2Br5WRrkjhUU5y7UPqh2Xw4%2FA%3D&shp=a5d48078&shcp=af611e6c"
          alt="avatar"
        ></img>
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>

      <div className={cx('body')}>
        <h4 className={cx('nickname')}>
          <strong>trungoccho</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />{' '}
        </h4>
        <p className={cx('name')}>Trung Oc Cho</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Follower</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
