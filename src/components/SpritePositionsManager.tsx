import { useState } from 'react';
import { SpritePosition } from '../utils/SpritePosition';
import { Hr } from './Hr';
import { Counter } from './Counter';
import { Button } from './Button';

interface Props {
    state: SpritePosition[];
    setState: React.Dispatch<React.SetStateAction<SpritePosition[]>>;
}

export const SpritePostionsManager = (props: Props) => {
    const [column, setColumn] = useState(0);
    const [row, setRow] = useState(0);
    return (
        <>
            {props.state.map((spritePosition, index) => {
                return (
                    <div
                        className='flex'
                        key={index}>
                        <div className='flex flex-row gap-2 flex-1'>
                            <p>row: {spritePosition.row}</p>
                            <p>col: {spritePosition.column}</p>
                        </div>
                        <Button
                            onClick={() => {
                                props.setState((prev) => {
                                    const next = [...prev];
                                    next.splice(index, 1);
                                    return next;
                                });
                            }}>
                            X
                        </Button>
                    </div>
                );
            })}

            <Hr />

            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <p className='pb-1'>Row</p>
                    <Counter
                        state={row}
                        setState={setRow}
                        steps={1}
                    />
                </div>
                <div>
                    <p className='pb-1'>Column</p>
                    <Counter
                        state={column}
                        setState={setColumn}
                        steps={1}
                    />
                </div>
            </div>

            <Button
                onClick={() => {
                    props.setState((prev) => [...prev, { row, column }]);
                }}>
                Add
            </Button>
        </>
    );
};
