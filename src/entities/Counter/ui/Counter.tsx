import { useDispatch, useSelector } from "react-redux";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { counterActions } from "../model/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue";


export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{value}</h1>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={increment}
                data-testid="increment-button"
            >
                increment
            </Button>
            <Button
                theme={ThemeButton.OUTLINE}
                onClick={decrement}
                data-testid="decrement-button"
            >
                decrement
            </Button>
        </div>
    );
};
