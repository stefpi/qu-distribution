export default function SearchBar({ setSearchTerm }) {
  function handleInputChange(e) {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="flex items-center justify-center h-24">
      <div className="bg-customGray rounded-lg p-2 w-1/2">
        <input
          className="w-full p-3 text-md rounded-md"
          placeholder="Search for course..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}
