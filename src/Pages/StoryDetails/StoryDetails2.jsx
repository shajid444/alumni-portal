import React from "react";
import { MdDateRange } from "react-icons/md";

const StoryDetails2 = () => {
    return (
        <section className="bg-gray-50 py-10 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Date and Title */}
                <div className="text-center">
                    <div className="flex justify-center items-center gap-2 text-gray-600">
                        <MdDateRange className="text-xl" />
                        <span className="text-sm">Jun 07, 2024</span>
                    </div>
                    <h1 className="text-3xl font-bold text-purple-800 mt-4">
                    Career Development Corner: <br></br> Navigating the Professional Landscape
                    </h1>
                </div>

                {/* Image Section */}
                <div className="mt-8">
                    <img
                        src="https://i.ibb.co.com/qFJ2fRQ/stephanie-hau-k-MJhu-PLEYVI-unsplash.jpg" // Replace with your actual image URL
                        alt="Alumni Social Impact"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                </div>

                {/* Description Section */}
                <div className="mt-8 text-gray-800 leading-relaxed">
                    <p>
                    In the dynamic world of careers, where pathways twist and opportunities abound, our alumni seek guidance on their professional journeys. Whether you’re a fresh graduate or a seasoned professional, this corner is your compass—a toolkit to navigate the ever-evolving landscape.
                    </p>

                    {/* Stories */}
                    <ol className="mt-6 list-decimal list-inside space-y-4">
                        <li>
                            <strong>Crafting Your Personal Brand</strong>
                            <p>
                            Your career is more than a job; it’s your brand. How do you present yourself to the world? Start by defining your unique value proposition. What skills, experiences, and passions set you apart? Build a compelling LinkedIn profile, curate your digital presence, and tell your story authentically. Remember, your personal brand precedes your resume.
                            </p>
                        </li>
                        <li>
                            <strong>Networking: Beyond Business Cards</strong>
                            <p>
                            Networking isn’t about collecting business cards—it’s about building meaningful connections. Attend industry events, join professional associations, and engage online. Be curious, ask questions, and listen actively. Your next opportunity may come from a casual conversation or a virtual coffee chat. Nurture relationships; they’re your career’s lifelines.
                            </p>
                        </li>
                        <li>
                            <strong>Healthcare Heroes: Healing Beyond Borders</strong>
                            <p>
                                Dr. Tina Ahmed, a medical graduate, crosses continents. Her stethoscope becomes her compass as she provides medical aid in war-torn regions. From administering vaccines to comforting frightened children, Dr. Ahmed’s journey is one of compassion and courage. Her prescription? Empathy and action.
                            </p>
                        </li>
                        <li>
                            <strong>Tech for Good: Code with a Conscience</strong>
                            <p>
                                Kamal Hussain, a computer science alum, codes with purpose. He develops apps that connect marginalized communities to essential services—healthcare, education, and clean water. Kamal’s lines of code bridge gaps, transcending borders and biases. His mantra? “Tech can change lives; let’s make it count.”
                            </p>
                        </li>
                        <li>
                            <strong>Artivism: Brushes for Change</strong>
                            <p>
                                Aryan Khan, a fine arts graduate, wields his brush as an activist. His murals adorn city walls, depicting stories of resilience, equality, and hope. Aryan’s art speaks louder than slogans. It challenges norms, ignites conversations, and invites passersby to pause and reflect.
                            </p>

                            <p className="mt-5">
                                These alumni aren’t just graduates; they’re advocates, healers, and change-makers. Their impact reverberates beyond degrees and diplomas. As we celebrate their endeavors, let’s remember that giving back isn’t a choice—it’s our responsibility. Together, we create ripples of transformation, shaping a world where compassion and action intersect.<br></br>



                             
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default StoryDetails2;
