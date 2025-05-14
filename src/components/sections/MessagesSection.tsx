import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

// Sample messages from team members
const messages = [
  {
    id: 4,
    name: "Alffrey George Chemmannoor",
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
    id: 3,
    name: "Ekta Bahety",
    role: "Lead Engineer",
    message: `Sanjib, it’s not easy to say goodbye to someone who has been such a great part of our team. Your leadership as both a Scrum Master and Project Manager has made a lasting impact on us all. The way you managed timelines, kept everything on track, and still made sure no one felt overwhelmed really stood out. You always took the time to communicate clearly and check in with everyone, and that meant a lot. You’ve been such a calm, steady presence and a genuinely great person to work with. While we’re sad to see you go, we’re excited for what lies ahead for you. Wish you all the success and happiness in your future endeavours. You’ll be greatly missed!`,
    avatar: "https://i.ibb.co/DgmbRJBj/Ekta.jpg",
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
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Junior Project Manager",
    message:
      "As the newest member of the team, I've had the privilege of learning from you for only a short time, but your impact has been profound. The way you've created space for questions and growth has made me feel valued from day one. I'll carry your lessons throughout my career.",
    avatar:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const MessagesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeMessage, setActiveMessage] = useState<number | null>(null);

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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                ${
                  index === 0
                    ? "bg-gradient-to-tr from-blue-50 to-purple-50"
                    : ""
                }
                ${
                  index === 1
                    ? "bg-gradient-to-tr from-green-50 to-blue-50"
                    : ""
                }
                ${
                  index === 2
                    ? "bg-gradient-to-tr from-yellow-50 to-red-50"
                    : ""
                }
                ${
                  index === 3
                    ? "bg-gradient-to-tr from-pink-50 to-orange-50"
                    : ""
                }
                ${
                  index === 4
                    ? "bg-gradient-to-tr from-indigo-50 to-cyan-50"
                    : ""
                }
                ${
                  index === 5
                    ? "bg-gradient-to-tr from-violet-50 to-emerald-50"
                    : ""
                }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-10 pb-24">
                <div className="absolute top-8 left-8 text-gray-300/40">
                  <Quote size={64} />
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-bl-full shadow-inner"></div>

                <div className="relative mb-4 min-h-500">
                  <p className="text-gray-800 text-xl leading-relaxed mb-4 font-medium pt-16">
                    {activeMessage === message.id
                      ? message.message
                      : `${message.message.substring(0, 321)}...`}
                  </p>

                  {message.message.length > 320 && (
                    <button
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm focus:outline-none transition-colors duration-200 underline"
                      onClick={() =>
                        setActiveMessage(
                          activeMessage === message.id ? null : message.id
                        )
                      }
                    >
                      {activeMessage === message.id ? "Read less" : "Read more"}
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
    </section>
  );
};
