import React from 'react';
import ItemLayout from 'components/item/ItemLayout';
import ItemDescription from 'components/item/ItemDescription';
import ItemImage from 'components/item/ItemImage';

const item = {
    id: 1,
    image: 'https://media.sweetwater.com/api/i/q-82__ha-6911d3409c5cd1f5__hmac-5019277e41a27757b8c5abe25df19fd4b973d8a1/images/closeup/750-Broad70ABB_front.jpg',
    title: 'Fender Telecaster 2x1020',
    description: 's an American manufacturer of stringed instruments and amplifiers. Fender produces acoustic guitars, bass amplifiers and public address equipment, but is best known for its solid-body electric guitars and bass guitars, particularly the Stratocaster, Telecaster, Precision Bass, and the Jazz Bass. The company was founded in Fullerton, California, by Clarence Leonidas "Leo" Fender in 1946.[6] Its headquarters are in Scottsdale, Arizona.stringed instruments and amplifiers. Fender produces acoustic guitars, bass amplifiers and public address equipment, but is best known for its solid-body electric guitars and bass guitars, particularly the Stratocaster, Telecaster, Precision Bass, and the Jazz Bass. The company was founded in Fullerton, California, by Clarence Leonidas "Leo" Fender in 1946.[6] Its headquarters are in Scottsdale, Arizona.',
    price: 1600
}

const Item = () => {
    return (
        <ItemLayout>
            <ItemImage key={item.id} img={item.image}/>
            <ItemDescription key={item.id} title={item.title} price={item.price} description={item.description}/>
        </ItemLayout>
    )
}

export default Item;
