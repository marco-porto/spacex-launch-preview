export default function Navbar() {
  return (
    <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-5 py-8 navbar-expand-lg text-white">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a className="text-base mr-4 py-2" href="#">
            SpaceX Project
          </a>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
          </button>
        </div>
        <div className="flex flex-grow items-center bg-white bg-opacity-0">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="flex items-center mr-16">
              <a className="flex items-center text-base" href="#">Api</a>
            </li>
            <li className="flex items-center mr-10">
              <a className="flex items-center text-base" href="#">Contribute</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
