import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
import Image from 'next/image';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      {/* Don't need to include /public in the front because it already knows to look for these in the public folder */ }
      <Image src={'/' + image} alt={title} width={250} height={160}/> {/* Image optimizes the images. Have to specify the width and height for it.
       It uses webp in Google. Reduces the size otherwise as well. Probably by using the width and height. The optimizes images are generated
       as they're needed. It checks the device to generate and serve the cached image. Once an image's optimized version is generated, then
       it gets cached. */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
