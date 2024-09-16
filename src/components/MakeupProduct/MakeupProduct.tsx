import React, { useState } from "react";
import MakeupCardFront from "./../MakeupFront/MakeupFront";
import MakeupCardBack from "./../MakeupBack/MakeupBack";
import ReactCardFlip from "react-card-flip";
import "./MakeupProduct.scss";

interface MakeupProductProps {
    addToFavourites(id: string, heartStatus: boolean): void;
    id: number;
    name: string;
    image_link: string;
    description: string;
    brand: string;
    variant: string;
    product_type: string;
    addToFavourites(id: string, heartStatus: boolean): void;
    product_colors: {
        hex_value: string;
        colour_name: string;
    }[];
}

const MakeupProduct: React.FC<MakeupProductProps> = ({
    id,
    name,
    image_link,
    description,
    brand,
    variant,
    product_type,
    product_colors,
    addToFavourites,
}) => {
    //make card flip
    //resource = "https://www.geeksforgeeks.org/design-a-flip-card-effect-using-reactjs/"
    const [isFlipped, setFlipped] = useState(false);
    const handleClick = () => {
        setFlipped(!isFlipped);
    };

    // created a card flip component using this resource and importing a package see resource
    //  https://blog.openreplay.com/creating-animated-flip-cards-in-react/

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="vertical"
            flipSpeedBackToFront={1.5}
            flipSpeedFrontToBack={1.5}
        >
            <div className="front">
                <MakeupCardFront
                    name={name}
                    image_link={image_link}
                    brand={brand}
                    useFallback={true}
                    variant={variant}
                    product_type={product_type}
                    product_colors={product_colors}
                />
                <button
                    className={`front__button front__button--${variant}`}
                    onClick={handleClick}
                >
                    ^
                </button>
            </div>

            <div className="back">
                <MakeupCardBack
                    addToFavourites={addToFavourites}
                    id={id}
                    description={description}
                    variant={variant}
                />
                <button
                    className={`back__button back__button--${variant}`}
                    onClick={handleClick}
                >
                    ^
                </button>
            </div>
        </ReactCardFlip>
    );
};

export default MakeupProduct;
