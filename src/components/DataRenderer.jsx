import { Spinner } from '@/components/ui';

const DataRenderer = ({ children, error, isLoading }) => {
  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
