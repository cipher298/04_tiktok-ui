import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img src="" alt="avatar"></img>
        <Button primary>Following</Button>
      </header>
    </div>
  );
}

export default AccountPreview;
