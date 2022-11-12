import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import HeaderCartButton from "../components/Layout/HeaderCartButton";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/HeaderCartButton">
                <HeaderCartButton/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;