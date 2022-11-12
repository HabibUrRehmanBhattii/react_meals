import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import HeaderCartButton from "../components/Layout/HeaderCartButton";
import CartProvider from "../store/CartProvider";
import Meals from "../components/Meals/Meals";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/PaletteTree">
                <PaletteTree/>
            </ComponentPreview>
            <ComponentPreview path="/HeaderCartButton">
                <HeaderCartButton/>
            </ComponentPreview>
            <ComponentPreview path="/CartProvider">
                <CartProvider/>
            </ComponentPreview>
            <ComponentPreview path="/Meals">
                <Meals/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;