"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface NewsFiltersProps {
  categories: string[]
  onFilterChange: (search: string, category: string) => void
}

export default function NewsFilters({ categories, onFilterChange }: NewsFiltersProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onFilterChange(e.target.value, activeCategory)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onFilterChange(search, category)
  }

  return (
    <div className="mb-8">
      <Input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={handleSearchChange}
        className="mb-4"
      />
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeCategory === 'All' ? 'default' : 'outline'}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}