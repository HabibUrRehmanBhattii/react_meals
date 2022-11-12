import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import HeaderCartButton from "../components/Layout/HeaderCartButton";
import CartProvider from "../store/CartProvider";
import Meals from "../components/Meals/Meals";
import MealsSummary from "../components/Meals/MealsSummary/MealsSummary";
import MealItem from "../components/Meals/MealItemRendring/MealItem";
import MealItemForm from "../components/Meals/MealItemRendring/MealItemForm/MealItemForm";
import AvailableMeals from "../components/Meals/AvailableMeals/AvailableMeals";

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
            <ComponentPreview path="/MealsSummary">
                <MealsSummary/>
            </ComponentPreview>
            <ComponentPreview path="/MealItem">
                <MealItem/>
            </ComponentPreview>
            <ComponentPreview path="/MealItemForm">
                <MealItemForm/>
            </ComponentPreview>
            <ComponentPreview path="/AvailableMeals">
                <AvailableMeals/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;