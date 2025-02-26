import { AiFillStar } from 'react-icons/ai';

function SkillSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  React & React Native
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  TypeScript
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Next.js
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">UI/UX</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Figma
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Animation Libraries
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Tools & Testing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Jest & Testing Library
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Git & CI/CD
                </li>
                <li className="flex items-center">
                  <AiFillStar className="w-4 h-4 text-yellow-400 mr-2" />
                  Performance Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}

export default SkillSection;