import Head from 'next/head'; // Head can be used to add additional content to the head tag.

import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
        <Head> {/* Whatever we add here will be added to the head tag in the HTML document */}
            <title>NextJS Events</title>
        </Head>
        <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
