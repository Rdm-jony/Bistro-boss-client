
const CoverbgPrlx = ({ featuredImg, filter, bgHeading, bgDetails }) => {
    return (
        <div>
            <div
                className={`w-full h-[700px] bg-fixed`}
                style={{
                    backgroundImage: `url(${featuredImg})`,
                }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="w-full text-white text-center px-5 pb-8">
                    <div className="flex justify-center items-center h-[700px]">
                        <div className='w-5/6 text-center mx-auto bg-black bg-opacity-50 p-20 '>
                            <h2 className={`${filter == 'offered' ? 'text-7xl font-bold' : 'text-5xl font-semibold'} mb-3`}>{bgHeading}</h2>
                            <p>{bgDetails}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverbgPrlx;