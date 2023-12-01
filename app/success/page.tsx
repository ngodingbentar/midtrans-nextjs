import Link from "next/link"

const SuccessPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <h1 className="text-3xl">Thank you</h1>
        <Link href={'/'} className="text-blue-500">Back to Home</Link>
      </div>
    </div>
  )
}

export default SuccessPage