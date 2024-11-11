

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-green-600 text-xl mb-2">{subHeading}</p>
            <h3 className="text-green-600 text-2xl border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;