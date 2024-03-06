import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Jobs Zone</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Jobs</a>
            <a class="mr-5 hover:text-gray-900">Company</a>
            <a class="mr-5 hover:text-gray-900">Services</a>
          </nav>

          <Link href="/login">
            <button
              style={{
                padding: "10px 25px",
                backgroundColor: "blue",
                color: "white",
                marginRight: "10px",
                borderRadius: ".75rem",
              }}
            >
              Login
            </button>
          </Link>
          <Link href="/register">
            <button
              style={{
                padding: "10px 25px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: ".75rem",
              }}
            >
              Register
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
