import Link from "next/link"

const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Link href="/">
        <div className="p-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Home</span>
        </div>
      </Link>
    </div>
  )
}

export default Header