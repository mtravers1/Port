import React from "react";

const CoverLetter = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      {/* Header */}
      <div className="mb-6 text-gray-800">
        <h2 className="text-2xl font-bold">Cover Letter</h2>
        <p className="mt-2">Michael Travers</p>
        <p>📞 202-288-0295 | 📧 miketravers94@gmail.com</p>
        <p className="mt-2 text-gray-600">29 March 2025</p>
      </div>

      {/* Greeting */}
      <p className="mb-4">Dear Hiring Manager,</p>

      {/* Body */}
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          I am writing to express my interest in a position in the IT industry. With a
          solid background in software development, networking, and technical support, I
          am confident that my diverse skill set makes me an ideal candidate for this
          role. I am currently pursuing my Master’s in Computer Science at the University
          of the District of Columbia and have gained hands-on experience through both
          academic coursework and professional roles.
        </p>

        <p>
          In my previous position as a Software Developer at{" "}
          <span className="font-medium">Alliance Software Development</span>, I contributed
          to a range of full-stack web development projects. I collaborated with senior
          developers to create high-quality web applications using React, Node.js,
          Express.js, Spring Boot, and databases such as MongoDB and PostgreSQL.
          Additionally, I gained valuable experience in debugging, managing version
          control through GitHub, and streamlining deployment using AWS Amplify. I also
          worked in Agile teams, contributing to stand-ups, sprint planning, and feedback
          cycles.
        </p>

        <p>
          My technical skills are complemented by my experience as a{" "}
          <span className="font-medium">Network Engineer</span> with the DC Office of
          Employment Services, where I designed and deployed Cisco-based network
          infrastructures, managed IP addressing, optimized performance, and implemented
          security protocols like firewalls and EtherChannels. I also earned my{" "}
          <span className="font-medium">Cisco Certified Support Technician (CCST)</span>{" "}
          certification to further strengthen my expertise.
        </p>

        <p>
          In graduate school, I conducted a{" "}
          <span className="font-medium">comparative analysis of machine learning models</span>{" "}
          for diabetes prediction using a 2025 dataset. I applied techniques like data
          preprocessing, feature selection, and evaluation across models such as SVM,
          Decision Trees, Linear Regression, Random Forest, and KNN to measure accuracy,
          precision, and recall.
        </p>

        <p>
          For my Cybersecurity class, I co-developed a{" "}
          <span className="font-medium">cybersecurity framework for drones</span> by
          integrating the NIST CSF to mitigate UAV vulnerabilities. We implemented
          lightweight cryptographic protocols, access controls, and telemetry logging to
          protect against attacks such as GPS spoofing, de-authentication, and MitM.
        </p>

        <p>
          Additionally, my coursework in Cloud Security, Data Science, and Data
          Engineering has sharpened my ability to solve complex challenges. I am
          proficient in multiple languages (Python, Java, JavaScript) and experienced with
          AWS, Azure, and modern front-end and back-end technologies.
        </p>

        <p>
          I am eager to apply my technical and problem-solving skills to contribute to
          your company’s success. My blend of software development and networking
          experience, paired with adaptability and a passion for learning, makes me a
          strong candidate for this internship role.
        </p>

        <p>
          I would welcome the opportunity to discuss my qualifications further. Please
          feel free to contact me at 202-288-0295 or miketravers94@gmail.com. Thank you
          for your time and consideration.
        </p>
      </div>

      {/* Closing */}
      <div className="mt-6 text-gray-800">
        <p>Sincerely,</p>
        <p className="font-medium mt-1">Michael Travers</p>
      </div>
    </section>
  );
};

export default CoverLetter;
