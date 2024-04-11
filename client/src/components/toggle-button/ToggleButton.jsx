import React from 'react';
import { Switch, InputSlider, Slider } from '../../styles/styles.toggle.button';
export function ToggleButton({ toggleTheme }) {
    return (
        <Switch>
            <InputSlider type="checkbox" onChange={toggleTheme} />
            <Slider />
        </Switch>
    )
};
export default ToggleButton;
