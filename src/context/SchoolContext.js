// src/context/SchoolContext.js
import React, { createContext, useState } from 'react';

// Create a Context for the school data
const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  // Set initial state with dummy data
  const [schoolData, setSchoolData] = useState({
    name: "Springdale Public School",
    introduction: "Welcome to Springdale Public School, where we nurture young minds for a brighter future.",
    history: "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. Over the decades, the school has grown from a modest beginning to become a leading educational institution known for its academic excellence and innovative teaching methods.",
    hist1: "In its initial years, Springdale Public School started with just a handful of students and a small team of dedicated teachers. The focus was on creating a nurturing environment where students could explore their potential and develop a love for learning. The school's curriculum emphasized fundamental academic skills, along with co-curricular activities to foster all-round development.",
    hist2: "As the years progressed, the school witnessed significant growth. New facilities were added, including a state-of-the-art library, science labs, and computer centers. The introduction of sports and arts programs provided students with opportunities to excel in various fields. During this period, the school also began to gain recognition for its academic achievements, with students consistently performing well in state and national examinations.",
    hist3: "The advent of the digital age brought new challenges and opportunities. Springdale Public School embraced technology by integrating smart classrooms, online resources, and digital learning tools into the curriculum. This transformation not only enhanced the learning experience but also prepared students for the demands of a rapidly changing world. The school also established partnerships with international institutions, facilitating student exchange programs and global exposure.",
    hist4: "In recent years, Springdale Public School has continued to innovate and excel. The introduction of STEM (Science, Technology, Engineering, and Mathematics) programs, along with a strong focus on sustainability and environmental education, reflects the school’s commitment to future-ready education. Extracurricular activities such as robotics clubs, debate teams, and community service initiatives provide students with diverse opportunities to develop leadership skills and social responsibility.",
    carousels: {
      photos: [
        { src: "https://www.windrushvalleyschool.co.uk/wp-content/uploads/2021/07/private_school_oxfordshire_sports-1080x675.jpg", description: "Annual Sports Day - Celebrating Excellence in Sports" },
        { src: "https://core-docs.s3.amazonaws.com/jackson_county_schools_ar/article/image/large_5144d4de-e573-4015-a182-5902aae50ddc.png", description: "Science Exhibition - Showcasing Student Innovations" },
        { src: "https://www.abhyasaschool.com/assets/img/festivals-img1.jpg", description: "Cultural Fest - Embracing Diversity and Creativity" },
      ]
    },
    vision: "To create a learning environment that fosters academic excellence, critical thinking, and ethical values.",
    mission: "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.",
    principalMessage: "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.",
    infrastructure: [
      "State-of-the-art science and computer labs",
      "Spacious and well-equipped classrooms",
      "Library with a vast collection of books and digital resources",
      "Sports facilities including a playground, gymnasium, and swimming pool"
    ],
    curriculum: {
      primary: "English, Mathematics, Science, Social Studies, Art, Physical Education",
      secondary: "English, Mathematics, Science (Physics, Chemistry,Biology), Social Studies, Computer Science, Physical Education, Art",
      seniorSecondary: {
        science: " Physics, Chemistry, Biology, Mathematics, Computer Science, English",
        commerce: " Accountancy, Business Studies, Economics, Mathematics, English"
      }
    },
    admissionProcess: "Admission forms are available for download. Submit the completed form along with required documents at the school office.",
    admissionCriteria: "Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.",
    importantDates: {
      formAvailability: "March 1st",
      lastDate: "March 31st",
      entranceTest: "April 15th",
      resultsAnnouncement: "April 30th"
    },
    faculty: [
      { src: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg' , name: "John Doe", role: "Principal", experience: "20 years of experience in educational administration" },
      { src: 'https://st2.depositphotos.com/2931363/6511/i/450/depositphotos_65116237-stock-photo-happy-young-man-in-shirt.jpg' , name: "Jane Smith", role: "Vice Principal", experience: " Vice Principal, M.Sc. in Physics, 15 years of teaching experience." },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuUwExMndJ0IioFnec42P_uyo-kr6LJ3LAA&s' , name: "Emily Johnson", role: "English Teacher", experience: " English Teacher, M.A. in English, 10 years of teaching experience " },
      { src: 'https://m.media-amazon.com/images/M/MV5BYjkxNmM1MTItMzIwOC00MmJjLWJhYjUtYTE4OGY4YjUzYWUxXkEyXkFqcGdeQXVyODczNjQ1ODY@._V1_.jpg' , name: "Michael Brown", role: "Mathematics Teacher", experience: " Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience" },
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jc8fAIjgosltLvCk0G5QRt7C27JGoDd3LA&s' , name: "Sophia Davis", role: "Science Teacher", experience: " Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience" },
      { src: 'https://images.ctfassets.net/rw1c9zty1onu/5ad57f40-8f0f-4a17-92ef-191fcaf707bd/9be350c28cdf99fc12226699b7f2f427/importedImage5ad57f40-8f0f-4a17-92ef-191fcaf707bd' , name: "David Wilson", role: "Computer Science Teacher", experience: " Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience." }
    ],
    students: {
      life1: [ "Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club" ],
      life2: ["Literary Society, Environmental Club, Astronomy Club, Coding Club" ],
      achievements: [
        "John Smith - National Level Math Olympiad Winner",
        "Sarah Lee - Gold Medalist in State Swimming Championship",
        "Tech Innovators Club - Winners of Inter-School Robotics Competition"
      ],
      council: {
        president: "Amy Parker, Grade 12",
        vicePresident: "Rajiv Mehta, Grade 11",
        secretary: "Lisa Wong, Grade 10"
      }
    },
    gallery: {
      photos: [
        { src: "https://c1.wallpaperflare.com/preview/492/907/716/school-class-school-children-bali.jpg", description: "A glimpse of our interactive classrooms." },
        { src: "https://dwpszirakpur.com/wp-content/uploads/2016/12/DSC_1577-1200x480.jpg", description: "Students participating in various sports events." },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRsWefidYsa4C9XQjRDqHrdzeeEVDFBC4_Q&s", description: "Students presenting their science projects." },
        { src: "https://exambazaar-2020.s3.amazonaws.com/37fbfe1fd5c03ae582635016c2ddb677.jpg", description: "Students performing in the cultural fest." },
        { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwbGlicmFyaWVzfGVufDB8fDB8fHww", description: "Students reading and studying in the school library." }
      ],
      videos: [
        { src: "school_tour.mp4", description: "Virtual tour of Springdale Public School." },
        { src: "annual_function.mp4", description: "Highlights from the Annual Function 2023." }
      ]
    },
    contact: {
      address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code",
      phone: "+1 (123) 456-7890",
      email: "info@springdale.edu"
    }
  });

  return (
    <SchoolContext.Provider value={{ schoolData, setSchoolData }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolContext;
