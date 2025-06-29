import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Electrical & Electronic Engineering (EEE)",
    institution: "University of Chittagong, Bangladesh",
    year: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Agricultural University Collage, Mymensingh",
    year: "2018 - 2020",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Agricultural University Collage, Mymensingh",
    year: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className=" px-4 bg-base-100 pb-5">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-primary">Education</span>
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
