import { useState } from 'react';
import { Counter } from './components/Counter';
import { Hr } from './components/Hr';
import { ImageUpload } from './components/ImageUpload';
import { TopNav } from './components/TopNav';
import { toBase64 } from './utils/base64';
import { SpriteSheetAnimation } from './components/SpriteSheetAnimation';
import { SpritePosition } from './utils/SpritePosition';
import { SpritePostionsManager } from './components/SpritePositionsManager';

function App() {
    const [image, setImage] = useState('');
    const [framePerSecond, setFramePerSecond] = useState(5);
    const [paddingX, setPaddingX] = useState(0);
    const [paddingY, setPaddingY] = useState(0);
    const [gapX, setGapX] = useState(0);
    const [gapY, setGapY] = useState(0);
    const [spriteWidth, setSpriteWidth] = useState(100);
    const [spriteHeight, setSpriteHeight] = useState(100);

    const [stepSize, setStepSize] = useState(1);

    const [spritePositions, setSpritePositions] = useState<SpritePosition[]>([]);

    const onUpload = (file: File) => {
        toBase64(file).then((base64) => setImage(base64));
    };

    return (
        <>
            <TopNav />
            <main className='flex flex-row min-h-full fixed'>
                <aside className='p-4 bg-slate-700 min-h-full max-h-full space-y-2 w-96 overflow-auto'>
                    <Counter
                        state={stepSize}
                        setState={setStepSize}
                    />

                    <Hr />

                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <p className='pb-1'>Padding X</p>
                            <Counter
                                state={paddingX}
                                setState={setPaddingX}
                                steps={stepSize}
                            />
                        </div>
                        <div>
                            <p className='pb-1'>Padding Y</p>
                            <Counter
                                state={paddingY}
                                setState={setPaddingY}
                                steps={stepSize}
                            />
                        </div>
                        <div>
                            <p className='pb-1'>Gap X</p>
                            <Counter
                                state={gapX}
                                setState={setGapX}
                                steps={stepSize}
                            />
                        </div>
                        <div>
                            <p className='pb-1'>Gap Y</p>
                            <Counter
                                state={gapY}
                                setState={setGapY}
                                steps={stepSize}
                            />
                        </div>
                        <div>
                            <p className='pb-1'>Sprite Width</p>
                            <Counter
                                state={spriteWidth}
                                setState={setSpriteWidth}
                                steps={stepSize}
                            />
                        </div>
                        <div>
                            <p className='pb-1'>Sprite Height</p>
                            <Counter
                                state={spriteHeight}
                                setState={setSpriteHeight}
                                steps={stepSize}
                            />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <p className='pb-1'>Frame Per Second</p>
                            <Counter
                                state={framePerSecond}
                                setState={setFramePerSecond}
                            />
                        </div>
                    </div>

                    <Hr />

                    <ImageUpload onUpload={onUpload} />

                    <Hr />

                    <SpritePostionsManager
                        state={spritePositions}
                        setState={setSpritePositions}
                    />
                </aside>

                <section className='p-4'>
                    <SpriteSheetAnimation
                        image={image}
                        paddingX={paddingX}
                        paddingY={paddingY}
                        gapX={gapX}
                        gapY={gapY}
                        spriteWidth={spriteWidth}
                        spriteHeight={spriteHeight}
                        fps={framePerSecond}
                        spritePositions={spritePositions}
                    />
                </section>
            </main>
        </>
    );
}

export default App;
