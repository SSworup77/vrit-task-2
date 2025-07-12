import person1 from "../assets/person-1.svg"
import person2 from "../assets/person-2.svg"
import person3 from "../assets/person-3.svg"
import person4 from "../assets/person-4.svg"
export const cardContents = [
    {
        id: 1,
        image: { person1 },
        title: "Start with Clarity",
        subtitle: "Step into a better learning path.",
        description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
        bgColour: "bg-red",
        imagePosition: "left",
        class: "scale-190 translate-y-20",
        hoverable:true
    },
    {
        id: 2,
        image: { person2 },
        title: "Learn by Doing",
        subtitle: "Practical skills, real projects.",
        description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
        bgColour: "bg-green",
        imagePosition: "right",
        class: "scale-170 translate-y-5",
        hoverable:true
    },
    {
        id: 3,
        image: { person3 },
        title: "Get Mentored & Supported",
        subtitle: "You're not learning alone.",
        description: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
        bgColour: "bg-purple",
        imagePosition: "left",
        class: "scale-250 translate-y-20",
        hoverable:false
    },
    {
        id: 4,
        image: { person4 },
        title: "Achieve & Showcase",
        subtitle: "Build your portfolio, get job-ready.",
        description: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
        bgColour: "bg-brown",
        imagePosition: "right",
        class: "scale-220 translate-y-20",
        hoverable:false
    }

]