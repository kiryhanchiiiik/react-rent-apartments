import { Search } from 'lucide-react';

import { Button, DateRangePicker, Input, Stepper } from '@/components/ui';
const ListingFilters = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      <Input className='w-[400px]' placeholder='Search destinations' />
      <DateRangePicker placeholder='Add dates' />
      <Stepper />
      <Button>
        <Search className='h-4 w-4' />
      </Button>
    </div>
  );
};

export default ListingFilters;
