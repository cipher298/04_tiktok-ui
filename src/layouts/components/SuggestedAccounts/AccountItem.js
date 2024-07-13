import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/8712dd1203cec510929b14c9f4102d16~c5_100x100.webp?lk3s=a5d48078&nonce=6395&refresh_token=cd87d14affd95f7faefe38369b5db019&x-expires=1720929600&x-signature=KBV%2Br5WRrkjhUU5y7UPqh2Xw4%2FA%3D&shp=a5d48078&shcp=af611e6c"
            alt="avatar"
          />

          <div className={cx('item-info')}>
            <h4 className={cx('nickname')}>
              <strong>trungoccho</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />{' '}
            </h4>
            <p className={cx('name')}>Trung Oc Cho</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
