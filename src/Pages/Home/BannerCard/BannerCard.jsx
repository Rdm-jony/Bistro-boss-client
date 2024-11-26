import serviceImg from '../../../assets/home/chef-service.jpg'

const BannerCard = () => {
    return (
        <div style={{ backgroundImage: `url(${serviceImg})`, backgroundPosition: "center", height: '400px' }} className='mx-auto max-w-5xl flex justify-center items-center mt-14'>
            <div className='bg-white text-center px-28 p-10 w-10/12 rounded-lg'>
                <h2 className='text-5xl mb-2'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default BannerCard;