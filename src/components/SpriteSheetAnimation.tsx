import { useEffect, useState } from 'react';
import { SpritePosition } from '../utils/SpritePosition';

interface Props {
    image: string;
    paddingX: number;
    paddingY: number;
    gapX: number;
    gapY: number;
    spriteWidth: number;
    spriteHeight: number;
    fps: number;
    spritePositions: SpritePosition[];
}

export const SpriteSheetAnimation = (props: Props) => {
    const [frameCounter, setFrameCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrameCounter(prev => prev + 1);
        }, 1000 / props.fps);
        return () => clearInterval(interval);
    }, [props.fps]);

    if (props.spritePositions.length === 0) return null;    

    const row = props.spritePositions[frameCounter % props.spritePositions.length].row;
    const col = props.spritePositions[frameCounter % props.spritePositions.length].column;

    const backgroundPositionX = props.paddingX + col * props.spriteWidth + props.gapX * col;
    const backgroundPositionY = props.paddingY + row * props.spriteHeight + props.gapY * row;

    console.log(backgroundPositionX, backgroundPositionY);

    return (
        <div
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: `auto`,
                backgroundPosition: `${-backgroundPositionX}px ${-backgroundPositionY}px`,
                width: props.spriteWidth,
                height: props.spriteHeight,
                backgroundRepeat: 'no-repeat',
            }}
        />
    );
};
