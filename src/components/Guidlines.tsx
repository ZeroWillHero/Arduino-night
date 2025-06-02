import './hero.css';
import { motion } from 'framer-motion';
import scatters from '../assets/svg/Asset 2.svg';
import BankDetailsCard from './bankDetailsCard';

export default function Guidelines() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#180930] via-[#22194d] to-[#12082a] flex flex-col items-center justify-center py-10">
            <section className="guidelines w-full flex flex-col items-center">
                <h1 className="p-3 hero-text text-3xl md:text-7xl text-white text-center mb-6 drop-shadow-lg">
                    Rules and Regulations
                </h1>
                <motion.img
                    src={scatters}
                    alt="scatters"
                    className="absolute left-0 bottom-0 w-full h-auto object-cover pointer-events-none"
                    style={{ zIndex: 14 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -18, 0, 18, 0],
                    }}
                    transition={{
                        opacity: { duration: 1.2, delay: 2.8 },
                        y: { duration: 3, delay: 2.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                    }}
                />
                {/* Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 justify-between items-center container mx-auto px-4 md:px-8">
                    {/* Rules Card */}
                    <div className="flex flex-col h-full max-w-2xl w-full rounded-2xl shadow-xl border border-[#2d1a4d] bg-gradient-to-br from-[#18122b] via-[#1e163a] to-[#22194d] p-4 md:p-6 backdrop-blur-xl">
                        <h2 className="hero-text text-2xl md:text-3xl text-fuchsia-200 mb-2 text-center drop-shadow">
                            නීති හා නියමයන් <span className="text-fuchsia-300">📜</span>
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-fuchsia-100 flex-1">
                            <li className="sinhala">සවස 6 සිට <span className='font-sans'>SyZyGy</span> ආයතනයට ඇතුල් වූ සිසුන්ට කිසිඳු හේතුවක් මත පසුදා උදෑසන 6 වනතෙක් ආයතන පරිශ්‍රයෙන් පිටවිය නොහැකිය</li>
                            <li className="sinhala">විවේක කාලය ලබාදීමේදි ගැහැනු ලමුන්ට හා පිරිමි ලමුන්ට වෙන් වෙන් වශයෙන් විවේක කාල ලබදෙනු ලැබේ</li>
                            <li className="sinhala">ගැහැනු ලමයින්ට දෙමාපියන් සමඟ පැමිනිය හැකි අතර දෙමාපියන් සඳහා රැඳීසිටීමට වෙනම දේශන ශාලාවක් සූදානම් කර ඇත</li>
                            <li className="sinhala">ඔබගේ රාත්‍රී ආහාරය නිවසින් රැගෙන ආ යුතුය</li>
                            <li className="sinhala">ඔබ එදින ආයතන පරිශ්‍රය තුල නිතිවිරෝධී ලෙස ක්‍රියාකලහොත් ඔබට එරෙහිව නීතිමය පියවර ගන්නා බව කරුණාවෙන් සළකන්න</li>
                            <li className="sinhala">ආයතනය පරිශ්‍රයට පිවිසුන පසු නැවත පිටව යන තෙක් ඔබගේ ආරක්ශාව පිලිබඳ සියලු වගකීම අප විසින් දරණු ලැබේ</li>
                        </ul>
                        <BankDetailsCard />
                    </div>
                    {/* Conference Details Card */}
                    <div className="flex flex-col h-full max-w-2xl w-full rounded-2xl shadow-xl border border-[#2d1a4d] bg-gradient-to-br from-[#18122b] via-[#1e163a] to-[#22194d] p-4 md:p-6 backdrop-blur-xl">
                        <h2 className="hero-text text-2xl md:text-3xl text-fuchsia-200 mb-2 text-center drop-shadow">
                            සම්මන්ත්‍රණය ගැන <span className="text-green-400">✅</span>
                        </h2>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-fuchsia-100 flex-1">
                            <li>මෙය සාර්ව ද්‍රව්‍ය අන්තර්ජාලට(IOT) පාඩම Practical ඇසුරින් සම්පූර්ණයෙන්ම ආවරණය වන ලෙස සිදුකරන සර්වරාත්‍රික සම්මන්ත්‍රණයකි</li>
                            <li>මෙය භෞතිකව පමණක් සිදුකරන සම්මන්ත්‍රණයක් වන අතර ජූනි 24 ප.ව 6.00 සිට පසුදා උදෑසන 6.00 දක්වා ගම්පහ SyZyGy ආයතනයේදී පැවැත්වේ</li>
                            <li>සෑම සිසුන් තිදෙනෙකුටම එක් laptop පරිගණකයක් සහ arduino Practical kit එකක් ලබාදෙන අතර TeamICT instructing team අධීක්ෂණය යටතේ තනි තනිවම practical සිදුකිරීමට අවස්ථාව ලබාදෙනු ලැබේ</li>
                            <li>මෙහිදී විශය නිර්දේශයේ අන්තර්ගත වන පහලම මට්ටමේ arduino පරිපථවල සිට සංකීර්ණ  මට්ටමේ වයාපෘතියක් නිර්මාණය කිරීම දක්වා අවශ්‍ය දැනුම practical ඇසුරින් ඔබට ලැබෙනු ඇත</li>
                            <li>සම්මන්ත්‍රණය අවසානයේ කණ්ඩායම් ව්‍යාපෘතියක් ලබාදෙන අතර එහිදී නිරිමාණය කරනු ලබන හොඳම project එකට ත්‍යාග පිරිනමනු ලැබේ</li>
                            <li>එදින ප්‍රවේශයේදී Arduino Theory නිබන්ධනයක්,Practical පිලිබඳ සම්පූර්ණ විස්තර ඇතුලත් නිබන්ධනයක්,Arduino සඳහා නිර්මාණය වූ ප්‍රශ්න ඇතුලත් නිබන්ධනයක් යන නිබන්ධන 3ක් සම්පූර්ණයෙන්ම නොමිලේ ලබදෙනු ලැබේ</li>
                            <li>සම්මන්ත්‍රණයට පැමිනෙන සිසුන් මෙම website එක හරහා ලියාපදිංචි විය යුතු අතර මේ සඳහා රු.200ක මුදලක් පහත සඳහන් ගිණුම් අංකවලට තැන්පත්කර එහි ඡායාරූපක් ඔබ register වන අවස්ථාවේ upload කිරීම සිදුකල යුතුය(මෙය හුදෙක් එදිනට පැමිනෙන සිසුන් ප්‍රමාණය තහවුරු කරගැනීම සඳහාවන ඇතුලත්වීමේ ගාස්තුවක් පමණක් වන අතර වෙනත් අමතර අයකිරීම් කිසිවක් නොමැත)</li>
                            <li>ඔබ website එක ඔස්සේ සම්න්ත්‍රණයට ලියාපදිංචි වූ පසු qr කේතයක් ඇතුලත් ප්‍රවේශ පත්‍රයක් ලැබෙනු ඇත..එය එදින ප්‍රවේශයේදී ඉදිරිපත් කළයුතු වේ</li>
                            <li>ආරක්ශක හේතූන් මත Website එක හරහා පෙර ලියාපදිංචි වූ සිසුන් පමණක් එදිනට ඇතුලත් කරගන්නා බව කරුනාවෙන් සළකන්න</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="w-full mt-10 py-4 flex justify-center items-center bg-gradient-to-r from-[#180930]/80 via-[#22194d]/80 to-[#12082a]/80 border-t border-fuchsia-900/30">
                <span className="text-xs md:text-sm text-fuchsia-200 tracking-wide text-center">
                    © {new Date().getFullYear()} Lasitha Prasad. All rights reserved.
                </span>
            </footer>
        </div>
    );
}