export default function SearchBar({ setSearchTerm }) {
  function handleInputChange(e) {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="flex items-center justify-center h-24">
      <input
        className="w-1/2 p-3 text-md border-8 border-customGray rounded-lg"
        placeholder="Search for course..."
        onChange={handleInputChange}
      />
    </div>
  )
}
