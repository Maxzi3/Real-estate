import React from "react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "https://dummyimage.com/300x300",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Secetary",
      image: "https://dummyimage.com/300x300",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Agent",
      image: "https://dummyimage.com/300x300",
    },
    // Add more team members as needed
  ];

  return (
    <div className="container mx-auto py-12 my-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-10/12 mx-auto">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative group overflow-hidden">
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary bg-opacity-70 flex flex-col items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100">
              {/* Name and Position */}
              <h3 className="text-primary text-xl font-semibold mb-2">
                {member.name}
              </h3>
              <p className="text-primary text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
