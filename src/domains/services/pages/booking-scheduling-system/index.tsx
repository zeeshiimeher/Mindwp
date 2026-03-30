import { bookingSchedulingSystemPage } from '@/domains/services/data/booking-scheduling-system';
import { BookingSchedulingSystemRenderer } from '@/domains/services/renderers/BookingSchedulingSystemRenderer';

export default function BookingSchedulingSystemPage() {
  return (
    <BookingSchedulingSystemRenderer
      data={bookingSchedulingSystemPage}
      slug='booking-scheduling-system'
    />
  );
}
