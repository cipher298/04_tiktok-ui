import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  children,
  className,
  rightIcon,
  leftIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    disabled,
    rounded,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
