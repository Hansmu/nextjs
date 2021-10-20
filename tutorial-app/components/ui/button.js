import Link from 'next/link';

import classes from './button.module.css';

function Button(props) {
  if (props.link) {
    // A Link element renders an anchor tag under the hood, but if we want custom styling or whatever, then we need
    // to define a child anchor tag, which will then be used instead. We don't add a href to the anchor, because it
    // will be set automatically by the Link parent.
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
