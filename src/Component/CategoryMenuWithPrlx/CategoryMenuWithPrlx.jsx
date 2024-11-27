import React from 'react';
import useMenu from '../../hooks/useMenu';
import SectionTile from '../SectionTitle/SectionTile';
import MenuCard from '../MenuCard/MenuCard';
import Loader from '../Loader/Loader';
import CoverbgPrlx from '../CoverbgPrlx/CoverbgPrlx';
import { Link } from 'react-router-dom';

const CategoryMenuWithPrlx = ({ filter, heading, subHeading, featuredImg, bgHeading, bgDetails }) => {
    const [menuItems, isLoading] = useMenu(filter)
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <CoverbgPrlx featuredImg={featuredImg} filter={filter} bgHeading={bgHeading} bgDetails={bgDetails}></CoverbgPrlx>
            {heading && <SectionTile heading={heading} subHeading={subHeading}></SectionTile>}
            <div className='grid grid-cols-2 gap-8 mx-auto max-w-5xl my-10'>
                {
                    menuItems.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/shop' state={filter}>                <button className="btn hover:bg-black hover:text-primary bg-transparent btn-md border-0 border-b-2 border-black text-black uppercase">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryMenuWithPrlx;