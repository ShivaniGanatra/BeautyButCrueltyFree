import "./Keys.scss"

interface KeyProps {
    toggleKeys: () => void
}
const Keys = ({toggleKeys}:KeyProps) => {

    return (
        <div className="key">
            <div className="key__content" onClick={toggleKeys}>
                <div className="key__item">
                    <div className="key__shade key__shade--vegan"></div>
                    <p className="key__name "> : Vegan</p>
                </div>
                <div className="key__item">
                    <div className="key__shade key__shade--vegan-crueltyfree"></div>
                    <p className="key__name">: Vegan & Cruelty Free</p>
                </div>
            </div>
        </div>
    );
};

export default Keys;
