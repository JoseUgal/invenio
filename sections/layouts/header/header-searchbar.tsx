import { Input } from '@/design-system/atoms/input'
import { Search } from 'lucide-react'

const HeaderSearchbar = () => {
  return (
    <form className="hidden md:flex items-center w-full">
      <label htmlFor="simple-search" className="sr-only">
        Search in Customers {'( / )'}
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className='w-4 h-4' />
        </div>
        <Input
          type="text"
          id="simple-search"
          placeholder="Search in Customers ( / )"
          className='pl-10'
          required
        />
      </div>
    </form>
  )
}

HeaderSearchbar.displayName = 'HeaderSearchbar'

export { HeaderSearchbar }
