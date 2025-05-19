import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-6 px-4 flex flex-col items-center gap-4">
      <p className="text-sm text-center mt-4">
        © 2023 Samadrita Bhattacharya. All rights reserved.
      </p>
      <Image
        src="/lap1.jpg" 
        alt="Logo"
        className="w-8 h-8 rounded-full object-cover"
        width={200}
        height={200}
      />
    </footer>
  );
};

export default Footer;
