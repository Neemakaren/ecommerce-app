import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='h-full flex items-center justify-center'>
        <InfinitySpin color="black"/>
    </div>
  )
}

export default Loader