import React from 'react';
import { connect } from 'react-redux';

// imports of all the components
import Header from '../Header/Header';
import TopStrains from './TopStrains';
import SavedStrains from './SavedStrains';
import SleepyStrains from './SleepyStrains';

// Renders the link to '/home'
const HomePage = () => {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* What will be the app tiles that carousel */}

            <TopStrains />
            <SavedStrains />
            <SleepyStrains />
        </div>
    );
};

export default HomePage;
