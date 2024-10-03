import styles from './app.module.css';
import data from './data.json';
import React, { useState } from 'react';

export const App = () => {
    const [steps, setSteps] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const isFirst = activeIndex === 0;
    const isLast = activeIndex === steps.length - 1;

    const clickPrevious = () => {
        if (!isFirst) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const clickNext = () => {
        if (isLast) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleStepClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles['steps-list']}>
                        {steps.map((step, index) => (
                            <li
                                key={index}
                                className={`${styles['steps-item']} ${activeIndex >= index ? styles.done : ''} ${activeIndex === index ? styles.active : ''}`}
                            >
                                <button
                                    className={styles['steps-item-button']}
                                    onClick={() => handleStepClick(index)}
                                >
                                    {index + 1}
                                </button>
                                {step.title}
                            </li>
                        ))}
                    </ul>
                    <div className={styles['buttons-container']}>
                        <button
                            className={styles.button}
                            onClick={clickPrevious}
                            disabled={isFirst} 
                        >
                            Назад
                        </button>
                        <button className={styles.button} onClick={clickNext}>
                            {isLast ? 'Начать сначала' : 'Далее'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
