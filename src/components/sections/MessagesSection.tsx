import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, X } from "lucide-react";

const messages = [
  {
    id: 6,
    name: "Amit Chawla",
    role: "Senior Architect",
    message: `Sanjib, it’s been an absolute pleasure working with you. Your calm demeanor, thoughtful leadership, and ability to guide the team through every challenge have been truly admirable. You always knew how to bring clarity, keep things moving smoothly, and ensure everyone felt heard and supported. Your impact here will not be forgotten. Though we’re sad to see you go, we’re cheering for you all the way. Wishing you great success and happiness in your next journey!`,
    avatar: "https://i.postimg.cc/G3S1ff6m/profile-image-1689309396083.webp",
  },
  {
    id: 3,
    name: "Ekta Bahety",
    role: "Lead Engineer",
    message: `Sanjib, it’s not easy to say goodbye to someone who has been such a great part of our team. Your leadership as both a Scrum Master and Project Manager has made a lasting impact on us all. The way you managed timelines, kept everything on track, and still made sure no one felt overwhelmed really stood out. You always took the time to communicate clearly and check in with everyone, and that meant a lot. You’ve been such a calm, steady presence and a genuinely great person to work with. While we’re sad to see you go, we’re excited for what lies ahead for you. Wish you all the success and happiness in your future endeavours. You’ll be greatly missed!`,
    avatar: "https://i.ibb.co/DgmbRJBj/Ekta.jpg",
  },
  {
    id: 4,
    name: "Alffrey George",
    role: "Senior Manager Technology",
    message: `Sanjib, you've done a phenomenal job building rapport with the team and ensuring we remain on track with our deliverables through all the ups and downs. The client loves you and so do we. Though we are sad to see you go, we wish you all the very best in your next adventure. Till we meet again, take care.`,
    avatar: "https://i.ibb.co/jPj67FNG/profile-image-1713237103510.webp",
  },
  {
    id: 1,
    name: "Subham Soni",
    role: "Lead Engineer",
    message: `Dear Sanjib,
As you step into a new chapter, I just want to take a moment to thank you for everything you've done. You've not just managed the team — you've led with integrity, kept the sprints on track, handled clients with finesse, and always made sure things ran smoothly, even in the toughest moments.
Your leadership, patience, and support have left a lasting impact on all of us. It’s been a pleasure working with you, and your presence will surely be missed both professionally and personally.
Wishing you all the best in your future endeavors — wherever you go, they’re lucky to have you.`,
    avatar: "https://i.postimg.cc/cCk83gGQ/image-3.jpg",
  },

  {
    id: 2,
    name: "Roshan Kumar",
    role: "Senior Experience Engineer",
    message: `It’s been a pleasure working with you Sanjib. Your calm leadership, clear direction, and trust in the team made a huge difference. Thanks for always having our backs
    \n — wishing you all the best in your next chapter!`,
    avatar: "https://i.ibb.co/dwF2Sy7b/Image.jpg",
  },
  {
    id: 5,
    name: "Upasana Yadav",
    role: "Senior Quality Engineer ",
    message: `A Big Thank You and Best Wishes!
It’s honestly been such a pleasure working with you. Your friendly nature, constant positivity, and willingness to help out really made a difference to all of us. You were always someone we could count on, and your support (always with a smile!) never went unnoticed. You’ll definitely be missed around here.
Wishing you all the best for your future endeavours! 😊👍`,
    avatar: "https://i.postimg.cc/nh2n21b4/upasna.jpg",
  },
  {
    id: 7,
    name: "Permil Garg",
    role: "Senior Experience Engineer",
    message: `It’s been a wonderful experience working with you. Hard to believe it’s already 1.5 years as teammates. We’ve shared many great moments together. I learned a lot from you along the way. Sanjib has always been calm, supportive, and understanding. He never said no when someone needed help.
 
Wishing you all the best in your future endeavours. Good luck with your next projects. Hope we get to work together again soon.`,
    avatar: "https://i.postimg.cc/8PdCX073/1671902969468.jpg",
  },

  {
    id: 8,
    name: "Tripti Sharma",
    role: "Associate Technology",
    message: `Sanjib,
 
Many thanks for your unwavering support and cooperation throughout the ID journey. I wish you all the luck and success for the new adventure awaiting you. You will surely be missed.
 
Cheers`,
    avatar: "https://i.postimg.cc/KvFKbMgR/1685432181710.jpg",
  },
  {
    id: 9,
    name: "Rahul Kandpal",
    role: "Senior Quality Engineer",
    message: `Sanjib, you have always been a key pillar to this team, driving it to the success milestone we stand at today. You were someone who was always top on everything, knowing each of the team members to their true potential. I wouldn’t be wrong in saying that we wouldn’t have been here, had it not been for you as our project manager. Your contribution to the team and the project is immense, and beyond description. I really wish that you find success and joy wherever you go, and continue to build this momentum and credibility. Keep growing, keep rocking. Adios amigo!!!`,
    avatar: "https://i.postimg.cc/Lsvf8qX3/shared-image-4.jpg",
  },
  {
    id: 10,
    name: "Mohanish Masdekar",
    role: "Senior Experience Engineer",
    message: `Hi Sanjib,
 
First of all I would like to congratulate you on your new job 🎉🎉. Also, many thanks to you for managing this project extremely well. You have been a wonderful scrum master and regardless of what the project is, I am confident you can handle it well. Best of luck to you in your future endeavours!
 
Thanks,`,
    avatar: "https://i.postimg.cc/76sLp0Lj/Media.jpg",
  },
  {
    id: 11,
    name: "Iqra Enum",
    role: "Associate Product Management",
    message: `It was a pleasure working with you, wishing you the aboslute best on whereever your journey takes you.`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
  {
    id: 12,
    name: "Harjeet Singh Virdi",
    role: "Manager Technology",
    message: `Having Sanjib on the team meant everything was always in control. He never missed a any task and help team also make sure this. He wasn’t just great at project management; he also had a strong hold on technical architecture. His signature line? "PR merge kar do"—a phrase that always caught developers off guard.
Wishing him all the best!`,
    avatar: "https://i.postimg.cc/rFg4t4hb/Screenshot-2025-05-14-at-8-33-35-PM.jpg",
  },

  {
    id: 14,
    name: "Shweta Agarwal",
    role: "Manager Agile Program Mgmt.",
    message: `Sanjib. your impact and contribution to the team is very evident in each meeting, interaction, issue resolution with client and team. Thank you for all your guidance and help in ramping up on teh  project.
Wishing you the very best for all your future endeavours!!`,
    avatar: "https://i.postimg.cc/4ytyB1S1/Image-3-1.jpg",
  },
  {
    id: 15,
    name: "Sachin Bapna",
    role: "Senior Manager",
    message: `Hi Sanjib,
I want to express my gratitude for your dedication and hard work on Project Imperial Dade. Working alongside you on this project has been an incredibly rewarding experience. Your contributions have been invaluable, and while you'll be missed, I wish you all the best in your future endeavors. Please stay in touch!`,
    avatar: "https://i.postimg.cc/YCW9k7fC/Image-4.jpg",
  },
  {
    id: 16,
    name: "Vikas Kumar Bhaiya",
    role: "Vice President Agile Program Management",
    message: `Hi Sanjib,
As you wrap up your journey with us, I want to thank you for the incredible contributions you've made to the Imperial Dade account and to our team.
You stepped in during a particularly intense phase and quickly became an indispensable part of the delivery effort. Your leadership, calm presence, and flawless execution as the offshore delivery lead helped us navigate challenges and deliver a robust digital platform that earned consistent praise from the client. It’s no surprise that both the team and the client came to appreciate your dedication and professionalism deeply.
While I’m genuinely sad to see you go—and know it's a real loss for Sapient—I’m also excited for what lies ahead for you. You’ve made a lasting impact here, and I have no doubt that you’ll do the same wherever you go next.
Wishing you all the very best in your next adventure. Stay in touch, and good luck!`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
  {
    id: 17,
    name: "Nico Baltzer",
    role: "VP",
    message: `Thank you for everything Sanjib! It was a true pleasure. I am wishing you the best in your future activities, hoping our paths will cross again in the future`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
  {
    id: 18,
    name: "Tanya Lavrenko",
    role: "QA Test Engineer",
    message: `Sanjib, it’s been a real pleasure working with you! Thanks for all your help, support, and good vibes. Wishing you all the best in your next role. Stay awesome and keep in touch!`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
  {
    id: 19,
    name: "Andrii Lavrenko",
    role: "Contractor",
    message: `Hey Sanjib, we didn’t get a chance to work closely, but I’ve heard great things. Wishing you all the best in your next chapter - good luck and take care!`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
  {
    id: 20,
    name: "Brian Schmitt",
    role: "Sr. Director",
    message: `Sanjib, Its been a pleasure working with you on this project. We are going to miss the calm and patience you bring to the effort. i wish you all the best for the future.`,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s",
  },
];

export const MessagesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedMessage, setSelectedMessage] = useState<typeof messages[0] | null>(null);

  const Modal: React.FC<{message: typeof messages[0], onClose: () => void}> = ({message, onClose}) => (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img src={message.avatar} alt={message.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900">{message.name}</h3>
              <p className="text-gray-500">{message.role}</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 left-0 text-gray-200">
              <Quote size={48} />
            </div>
            <p className="text-gray-800 text-lg leading-relaxed pl-12 pt-4">
              {message.message.length <= 321 ? (
                message.message
              ) : (
                <>
                  {message.message.substring(0, 321)}
                  <span className="font-bold">
                    {message.message.substring(321)}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      id="messages"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Messages from the Team
          </h2>
          <div className="w-32 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Heartfelt messages from colleagues who have had the pleasure of
            working with Sanjib.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              className={`rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md relative 
                ${index === 0 ? "bg-gradient-to-tr from-blue-50 to-purple-50" : ""}
                ${index === 1 ? "bg-gradient-to-tr from-green-50 to-blue-50" : ""}
                ${index === 2 ? "bg-gradient-to-tr from-yellow-50 to-red-50" : ""}
                ${index === 3 ? "bg-gradient-to-tr from-pink-50 to-orange-50" : ""}
                ${index === 4 ? "bg-gradient-to-tr from-indigo-50 to-cyan-50" : ""}
                ${index === 5 ? "bg-gradient-to-tr from-violet-50 to-emerald-50" : ""}
                ${index === 6 ? "bg-gradient-to-tr from-yellow-50 to-red-50" : ""}
                ${index === 7 ? "bg-gradient-to-tr from-green-50 to-blue-50" : ""}
                ${index === 8 ? "bg-gradient-to-tr from-yellow-50 to-red-50" : ""}
                ${index === 9 ? "bg-gradient-to-tr from-pink-50 to-orange-50" : ""}
                ${index === 10 ? "bg-gradient-to-tr from-indigo-50 to-cyan-50" : ""}
                ${index === 11 ? "bg-gradient-to-tr from-violet-50 to-emerald-50" : ""}
                ${index === 12 ? "bg-gradient-to-tr from-pink-50 to-orange-50" : ""}
                ${index === 13 ? "bg-gradient-to-tr from-blue-50 to-purple-50" : ""}
                ${index === 14 ? "bg-gradient-to-tr from-yellow-50 to-red-50" : ""}
                ${index === 15 ? "bg-gradient-to-tr from-green-50 to-blue-50" : ""}
                ${index === 16 ? "bg-gradient-to-tr from-yellow-50 to-red-50" : ""}
                ${index === 17 ? "bg-gradient-to-tr from-pink-50 to-orange-50" : ""}
                ${index === 18 ? "bg-gradient-to-tr from-indigo-50 to-cyan-50" : ""}
                ${index === 19 ? "bg-gradient-to-tr from-violet-50 to-emerald-50" : ""}
              `}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-10 pb-24">
                <div className="absolute top-8 left-8 text-gray-300/40">
                  <Quote size={64} />
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-bl-full shadow-inner"></div>

                <div className="relative mb-8 min-h-500">
                  <p className="text-gray-800 text-xl leading-relaxed mb-4 font-medium pt-16">
                    {message.message.length <= 321
                      ? message.message
                      : `${message.message.substring(0, 321)}...`}
                  </p>

                  {message.message.length > 320 && (
                    <button
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm focus:outline-none transition-colors duration-200 underline"
                      onClick={() => setSelectedMessage(message)}
                    >
                      Read more
                    </button>
                  )}
                </div>

                <div className="absolute bottom-10 right-10 flex items-center">
                  <div>
                    <h3 className="text-base font-semibold text-blue-900 text-right">
                      {message.name}
                    </h3>
                    <p className="text-gray-400 text-sm text-right">
                      {message.role}
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm">
                      <img
                        src={message.avatar}
                        alt={message.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMessage && (
          <Modal 
            message={selectedMessage} 
            onClose={() => setSelectedMessage(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
