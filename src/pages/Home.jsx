import React, { useState } from 'react';
import TitleImage from 'components/home/TitleImage';
import Introduction from 'components/home/Introduction';
import HomeLayout from 'components/home/HomeLayout';

const Home = () => {
    return (
        <HomeLayout>
            <TitleImage />
            <Introduction />
        </HomeLayout>
    )
}

export default Home;
