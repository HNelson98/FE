import React, { useState } from 'react';

import styled from 'styled-components';

export const initialState = {
    Afpak: {
        id: 1,
        race: 'hybrid',
        flavors: ['Earthy', 'Chemical', 'Pine'],
        effect: {
            positive: ['Relaxed', 'Hungry', 'Happy', 'Sleepy'],
            negative: ['Dizzy'],
            medical: [
                'Depression',
                'Insomnia',
                'Pain',
                'Stress',
                'Lack of Appetite',
            ],
        },
    },
    African: {
        id: 2,
        race: 'sativa',
        flavors: ['Spicy/Herbal', 'Pungent', 'Earthy'],
        effects: {
            positive: [
                'Euphoric',
                'Happy',
                'Creative',
                'Energetic',
                'Talkative',
            ],
            negative: ['Dry Mouth'],
            medical: ['Depression', 'Pain'],
        },
    },
};

export const CardSection = styled('section')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow-x: hidden;
    margin: 1% 4%;
    div {
        border: 1px solid black;
        margin: 2%;
    }
`;

const TopStrains = () => {
    const [topStrains, setTopStrains] = useState(initialState);
    return (
        <>
            <h2>Top Strains</h2>
            <CardSection>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
                <div>
                    <h3>StrainName</h3>
                    <p>StrainRace</p>
                    <p>
                        StrainText, description.StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description. StrainText, description.
                        StrainText, description.
                    </p>
                    <h5>Effects</h5>
                    <ul>Medical:</ul>
                    <ul>Positive:</ul>
                    <ul>Negative:</ul>
                </div>
            </CardSection>
        </>
    );
};
export default TopStrains;
