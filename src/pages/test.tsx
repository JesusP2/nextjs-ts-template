import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
const Home: NextPage = () => {
    return (
        <nav>
            <Link href="/about">
                <a>About</a>
            </Link>
        </nav>
    );
};

export default Home;
