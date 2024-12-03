import React from "react";
import { MdDateRange } from "react-icons/md";

const StoryDetails = () => {
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
                        Giving Back: Alumni Impact on Social Causes
                    </h1>
                </div>

                {/* Image Section */}
                <div className="mt-8">
                    <img
                        src="https://i.ibb.co.com/LZq2rzZ/naassom-azevedo-Q-Sei-Tq-Slc-unsplash.jpg" // Replace with your actual image URL
                        alt="Alumni Social Impact"
                        className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                    />
                </div>

                {/* Description Section */}
                <div className="mt-8 text-gray-800 leading-relaxed">
                    <p>
                        In the quiet corners of our alumni community, a powerful force
                        stirs—the desire to give back. Beyond career milestones and personal
                        achievements, our graduates channel their energy toward causes that
                        resonate with their hearts. Let’s explore how NSU alumni are making
                        an indelible mark on social causes:
                    </p>

                    {/* Stories */}
                    <ol className="mt-6 list-decimal list-inside space-y-4">
                        <li>
                            <strong>Environmental Stewards: The Green Warriors</strong>
                            <p>
                                Riya Rahman, an environmental science graduate, dons her boots
                                and ventures into mangrove forests. Armed with seedlings and
                                determination, she leads reforestation efforts. Her mission? To
                                restore ecosystems, combat climate change, and protect
                                biodiversity. Riya's legacy is rooted in the soil she nurtures—
                                one tree at a time.
                            </p>
                        </li>
                        <li>
                            <strong>Education Champions: Empowering Minds</strong>
                            <p>
                                Dr. Aminul Islam, an education major, believes education is a
                                beacon. He founded a nonprofit that builds libraries in
                                underserved villages. These humble spaces become sanctuaries of
                                knowledge, inviting curious minds to explore. Dr. Islam's dream?
                                To see every child with a book in hand, eyes alight with
                                possibility.
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



                               <span className="text-orange-300" > Join the movement. Be an alumni advocate for change.</span>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default StoryDetails;
