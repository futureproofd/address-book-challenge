export const NavBar = () => {
  return (
    <nav className="font-sans flex flex-col text-center font-extralight text-gray-100 content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-gray-600 shadow-lg sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
        <a
          href="/home"
          className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
        >
          AddressBook
        </a>
      </div>
    </nav>
  );
};
