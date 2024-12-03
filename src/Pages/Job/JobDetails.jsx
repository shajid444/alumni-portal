import React from "react";

const JobDetails = () => {
    return (
        <div className="bg-gray-50 py-10 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-purple-700 mb-4">
                    Full Stack Web Developer #FTE2406001
                </h1>
                <p className="text-gray-600 mb-6 text-sm font-medium">Full Time</p>

                {/* Job Context */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Job Context
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        The Alumni Association of North South University (Alumnut) is seeking
                        a talented and motivated Full Stack Web Developer to join our team.
                        The ideal candidate will be responsible for maintaining, updating,
                        and developing our current portal built on PHP Laravel. This role
                        is crucial in enhancing our digital presence and ensuring seamless
                        interaction between alumni and the association.
                        <strong>
                            This is a work-from-home position with a requirement for at least
                            one physical meeting to be held inside Dhaka city area each week
                            at a randomly scheduled time.
                        </strong>
                    </p>
                </div>

                {/* Job Responsibility */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Job Responsibility
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Maintain and enhance the existing portal developed using PHP Laravel.</li>
                        <li>
                            Collaborate with the design team to implement user-friendly
                            interfaces and improve user experience.
                        </li>
                        <li>Write clean, maintainable, and efficient code.</li>
                        <li>
                            Troubleshoot, debug, and optimize web applications for maximum
                            speed and scalability.
                        </li>
                        <li>Ensure the security of web applications and protect user data.</li>
                        <li>Integrate third-party APIs and services as required.</li>
                        <li>Maintain and manage databases, ensuring data integrity and availability.</li>
                        <li>
                            Work closely with the office secretary, project manager, and other
                            team members to deliver updates and new features on time.
                        </li>
                        <li>
                            Stay updated with the latest industry trends and technologies to
                            ensure our portal remains modern and effective.
                        </li>
                    </ul>
                </div>

                {/* Additional Requirements */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Additional Requirements
                    </h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>
                            Experience with database management and optimization, especially
                            MySQL.
                        </li>
                        <li>Familiarity with version control systems, such as Git.</li>
                        <li>Excellent problem-solving skills and the ability to troubleshoot complex issues.</li>
                        <li>Strong communication skills, both verbal and written.</li>
                        <li>Ability to work independently and manage time effectively in a remote environment.</li>
                        <li>Dedication to detail and commitment to producing high-quality work.</li>
                        <li>
                            Willingness to learn and adapt to new technologies and methodologies.
                        </li>
                        <li>Must be located in Dhaka city and be flexible with physical meeting requirements.</li>
                        <li>
                            Prior experience in developing and managing web applications is a
                            plus.
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Employee Status
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Full Time

                    </p>

                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Educational Requirements
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        .Bachelor’s degree in Computer Science, Software Engineering, or a related field. <br />
                        .Equivalent practical experience may also be considered.

                    </p>

                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Job Location
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Dhaka, Bangladesh

                    </p>

                </div>
                <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        Salary
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        35k+

                    </p>

                </div>

                <button className="text-black px-8 py-4 mt-3 bg-orange-500 rounded-2xl">Apply</button>


            </div>
        </div>
    );
};

export default JobDetails;
