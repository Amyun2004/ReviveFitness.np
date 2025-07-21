// src/components/AboutPage/TrainerSection/TrainerSection.jsx

import React from 'react';
import TrainerCard from '../TrainerCard/TrainerCard'; // Corrected import path
import sreejandaiImg from '../../assets/img_gym/sreejandai.png'; // Corrected import path
import styles from './TrainerSection.module.css'; // Import the CSS Module

const trainers = [
    {
        img: sreejandaiImg,
        name: "Shreejan Shrestha",
        title: "Certified Fitness Trainer",
        achievements: [
            "💪 2000+ Body Transformations",
            "🏆 9 Years of Professional Experience",
            "🥇🥇🥇 bodybuilder"
        ],
        bio: "With nearly a decade of experience, Shreejan has helped thousands achieve their fitness goals. His personalized coaching style combines science, discipline, and motivation to deliver lasting transformations."
    }
];

export default function TrainerSection() {
    return (
        <section>
            {/* The 'heading' class is global, so no change here */}
            <h2 className="heading">Our <span>Trainers</span></h2>
            <div className={styles.aboutContainer}> {/* Apply module class */}
                {trainers.map((t, i) => (
                    <TrainerCard key={i} {...t} />
                ))}
            </div>
        </section>
    );
}