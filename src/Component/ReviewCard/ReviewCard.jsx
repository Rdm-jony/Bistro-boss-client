import Rating from 'react-rating';
import quote from '../../assets/icon/quote-left 1.png'
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ item }) => {
    const { name, details, rating } = item;

    return (
        <div className='space-y-3 py-5'>
            <div className='flex justify-center'>
                <Rating
                    readonly={true}
                    placeholderRating={rating}
                    emptySymbol={<FaStar className='text-gray-200 text-3xl' />
                    }
                    placeholderSymbol={<FaStar className='text-primary text-3xl' />}
                    fullSymbol={<FaStar className='text-primary' />}
                />
            </div>
            <img className='mx-auto' src={quote} alt="" />
            <p className='text-center'>{details}</p>
            <h2 className='text-center text-3xl text-primary font-semibold'>{name}</h2>
        </div>
    );
};

export default ReviewCard;