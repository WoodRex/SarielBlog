import { useState } from 'react'
import { useParams } from '@redwoodjs/router'

const SearchBar = () => {
  const { term } = useParams()
  const [searchInput, setSearchInput] = useState(term || '')

  const onChange = (event) => {
    setSearchInput(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    location.href = `/search/${searchInput}`
  }

  return (
    <form className="md:flex mt-2 mb-10" action="/search" onSubmit={onSubmit}>
      <input
        type="text"
        name="q"
        placeholder="Search"
        value={searchInput}
        onChange={onChange}
        className="md:flex-auto w-full md:min-w-0 border border-slate-600 text-sm px-3 py-1.5 rounded-t md:rounded-t-none md:rounded-l outline-none"
      />
      <button
        type="button"
        className="w-full md:w-auto bg-slate-600 hover:bg-slate-700 text-white uppercase text-sm rounded-b md:rounded-b-none md:rounded-r px-3 py-1.5"
        onClick={onSubmit}
      >
        Go
      </button>
    </form>
  )
}

export default SearchBar
