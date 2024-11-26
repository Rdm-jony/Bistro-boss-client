
const SectionTile = ({ subHeading, heading }) => {
    return (
        <div className="w-4/12 mx-auto my-10 text-center">
            <h5 className="text-primary mb-2">{subHeading}</h5>
            <h3 className="text-4xl border-y-2 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTile;