import featuredImg from '../../../assets/home/featured.jpg'
import SectionTile from '../../../Component/SectionTitle/SectionTile';

const BannerPrlx = () => {
    return (
        <div
            className="hero mx-auto max-w-5xl"
            style={{
                backgroundImage: `url(${featuredImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-full text-white text-center px-5 pb-8">
                <div className="">
                    <SectionTile heading='FROM OUR MENU' subHeading='---Check it out---'></SectionTile>
                    <div className='flex w-5/6 text-start mx-auto '>
                        <img src={featuredImg} className='w-64 mr-5 rounded-lg' alt="" />
                        <div>
                            <p>March 20, 2023</p>
                            <h2>WHERE CAN I GET SOME?</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn hover:bg-black btn-md border-0 border-b-2 border-white text-white uppercase bg-transparent">Read more</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerPrlx;