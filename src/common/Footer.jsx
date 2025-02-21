import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#ffffffd0] dark:bg-[#000000d0] border-t-[1px] border-neutral-300 dark:border-neutral-800 py-6 mt-auto backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-black dark:text-white">
              © {new Date().getFullYear()} AAI Technologies Inc. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-black dark:text-white hover:opacity-70 transition-opacity"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
