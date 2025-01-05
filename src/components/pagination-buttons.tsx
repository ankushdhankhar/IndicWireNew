import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface PaginationButtonProps {
  href: string;
  direction: 'previous' | 'next';
  isEnabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ href, direction, isEnabled }) => {
  const icon = direction === 'previous' ? (
    <ChevronLeft className="h-4 w-4 mr-2" />
  ) : (
    <ChevronRight className="h-4 w-4 ml-2" />
  );

  return isEnabled ? (
    <Link href={href} passHref>
      <Button variant="outline" className="outline-button">
        {direction === 'previous' && icon}
        {direction === 'previous' ? 'Previous' : 'Next'}
        {direction === 'next' && icon}
      </Button>
    </Link>
  ) : (
    <Button variant="outline" className="outline-button" disabled>
      {direction === 'previous' && icon}
      {direction === 'previous' ? 'Previous' : 'Next'}
      {direction === 'next' && icon}
    </Button>
  );
};

export default PaginationButton;
