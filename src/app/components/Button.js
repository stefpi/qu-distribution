export default function Button({ text }) {
  return (
    <button className="inline-block px-32 py-2 bg-customGray rounded hover:bg-gray-100">
      {text}
    </button>
  )
}
